const async = require("async");
const { body, validationResult } = require("express-validator");

const User = require("../models/user");

exports.user_login_get = function (req, res, next) {
  res.render("login_form", {"title": "Login Page"});
}

exports.user_login_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User login POST");
}

exports.user_signup_get = function (req, res, next) {
  res.render("signup_form", {"title": "Signup Page"});
}

exports.user_signup_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User signup POST");
}


exports.user_update_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User update GET");
}

exports.user_update_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User update POST");
}

exports.user_delete_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User update GET");
}

exports.user_delete_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: User update POST");
}