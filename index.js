const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

var server = app.listen(3000, function () {
  console.log("Ready on port %d", server.address().port);
});

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//require routes
var Home = require("./routers/Home");
var Register = require("./routers/Register");
var Login = require("./routers/Login");
var GetDataUser = require("./routers/GetDataUser");
var EditProfile = require("./routers/EditProfile");
var ImageDetect = require("./routers/ImageDetect");
var ChangePassword = require("./routers/ChangePassword");
var ForgotPassword = require("./routers/Forgotpassword");
var OTP = require("./routers/OTP");

//use routes
app.use("/", Home);
app.use("/Register", Register);
app.use("/Login", Login);
app.use("/GetDataUser", GetDataUser);
app.use("/EditProfile", EditProfile);
app.use("/ImageDetect", ImageDetect);
app.use("/ChangePW", ChangePassword);
app.use("/ForgotPW", ForgotPassword);
app.use("/OTP", OTP);

app.use(express.static("uploads")); //สำหรับโชว์รูปภาพใน service
