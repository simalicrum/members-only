const async = require("async");
const { body, validationResult } = require("express-validator");

const Message = require("../models/message");
const User = require("../models/user");

exports.message_detail = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message detail GET");
}

exports.message_list = function (req, res, next) {
  Message.find().populate("author").exec(function (err, message_list) {
    if (err) {
      return next(err);
    }
    res.render("message_list", { message_list: message_list, user: req.user});
    res.render("loggeout_nav", {});
  });
}

exports.message_create_get = function (req, res, next) {
  res.render("message_form", {"title": "Message Page"});
}

exports.message_create_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message create POST");
}

exports.message_update_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message update GET");
}

exports.message_update_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message update POST");
}

exports.message_delete_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message update GET");
}

exports.message_delete_post = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message update POST");
}