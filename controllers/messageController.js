const async = require("async");
const { body, validationResult } = require("express-validator");

const Message = require("../models/message");

exports.message_detail = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message detail");
}

exports.message_create_get = function (req, res, next) {
  res.send("NOT IMPLEMENTED: Message create GET");
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