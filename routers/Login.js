const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Login = require("../models/Login");
const Register = require("../models/Register");

router.post("/PostLogin", async function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  if (email === null || !email) {
    res.json({ status: "Failed", data: "Please enter Username" });
  } else if (password === null || !password) {
    res.json({ status: "Failed", data: "Please enter password" });
  } else {
    let checkEmail = await getcheckEmail(email); //เช็คอีเมล
    if (checkEmail[0].count > 0 && checkEmail != false) {
      let checkPW = await checkPassword(email); //เช็ครหัสผ่าน
      if (checkPW != false) {
        let hashPW = checkPW[0].password; //รหัสผ่านใน DB
        const match = await bcrypt.compare(password, hashPW); //เปรียบเทียบรหัสผ่าน
        if (match) {
          let idUser = await getIdUser(email, hashPW); //เช็ครหัสผ่าน
          res.json({ status: "Succeed", data: idUser });
        } else res.json({ status: "Failed", data: "Incorrect password" });
      } else res.json({ status: "Failed", data: "Error" });
    } else res.json({ status: "Failed", data: "Invalid email" });
  }
});

async function getcheckEmail(email) {
  return new Promise((resolve, reject) => {
    try {
      Register.getcheckEmail(email, (err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          resolve(false);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

async function checkPassword(email) {
  return new Promise((resolve, reject) => {
    try {
      Login.checkPassword(email, (err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          resolve(false);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

async function getIdUser(email, hashPW) {
  return new Promise((resolve, reject) => {
    try {
      Login.getIdUser(email, hashPW, (err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          resolve(false);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}
module.exports = router;