const express = require("express");
const router = express.Router();
const GetDataOther = require("../models/GetDataOther");

//ดึงข้อมูลผู้ใช้ทั้งหมด
router.get("/getDataUserAll", async function (req, res, next) {
  let getdataAll = await getdataUserAll();
  if (getdataAll != null) {
    res.json({ status: "Succeed", data: getdataAll });
  } else res.json({ status: "Failed", data: "Error Code" });
});

//ดึงข้อมูลจากตาราง object_detection
router.get("/getDataObjDetect", async function (req, res, next) {
  let getdataAll = await getdataObjDetect();
  if (getdataAll != null) {
    res.json({ status: "Succeed", data: getdataAll });
  } else res.json({ status: "Failed", data: "Error Code" });
});

//ดึงข้อมูลจากตาราง report
router.get("/getDataReport", async function (req, res, next) {
  let dataReport = await getdataReport();
  if (dataReport != null) {
    res.json({ status: "Succeed", data: dataReport });
  } else res.json({ status: "Failed", data: "Error Code" });
});

async function getdataUserAll() {
  return new Promise((resolve, reject) => {
    try {
      GetDataOther.getdataUserAll((err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          resolve(null);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

async function getdataObjDetect() {
  return new Promise((resolve, reject) => {
    try {
      GetDataOther.getdataObjDetect((err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          resolve(null);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

async function getdataReport() {
  return new Promise((resolve, reject) => {
    try {
      GetDataOther.getdataReport((err, rows) => {
        if (rows != null) {
          resolve(rows.rows);
        } else {
          console.log(err);
          resolve(null);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(null);
    }
  });
}

module.exports = router;
