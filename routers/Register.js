const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const Register = require("../models/Register");

router.post("/PostRegister", async function (req, res, next) {
  let email = req.body.email;

  let checkEmail = await getcheckEmail(email);

  if (checkEmail[0].count > 0) {
    res.json({ status: "Failed", data: "Duplicate_Email" });
  } else {
    let hashPW = await bcrypt.hash(req.body.password, 10);
    let regisStatus = await postdataUser(req.body, hashPW);
    if (regisStatus) {
      res.json({ status: "Succeed", data: "Succeed" });
    } else {
      res.json({ status: "Failed", data: "RigisError" });
    }
  }
});

async function getcheckEmail(email) {
  return new Promise((resolve, reject) => {
    try {
      Register.getcheckEmail(email, (err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          console.log(err);
          resolve(null);
        }
      });
    } catch (err) {
      resolve(false);
    }
  });
}

async function postdataUser(data, password) {
  return new Promise((resolve, reject) => {
    try {
      Register.postdataUser(data, password, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      resolve(false);
    }
  });
}

module.exports = router;
