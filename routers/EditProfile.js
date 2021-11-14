const express = require("express");
const router = express.Router();
const EditProfile = require("../models/EditProfile");

router.post("/PostEditProfile", async function (req, res, next) {
  let editprofile = await updateProfile(req.body);
  if (editprofile) {
    res.json({ status: "Succeed", data: "Succeed" });
  } else {
    res.json({ status: "Failed", data: "Error EditProfile fail" });
  }
});

async function updateProfile(data) {
  return new Promise((resolve, reject) => {
    try {
      EditProfile.updateProfile(data, (err, rows) => {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
      resolve(false);
    }
  });
}

module.exports = router;
