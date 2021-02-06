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
    if (req.user) {
      res.render("loggedin", { message_list: message_list, user: req.user});
    } else {
      res.render("loggedout", { message_list: message_list});
    }
  });
}

exports.message_create_get = function (req, res, next) {
  res.render("message_form", {"title": "Message Page"});
}

exports.message_create_post = [
  body("title", "Title must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("message", "Message cannot be blank.").trim().isLength({ min: 1}).escape(),
  (req, res, next) => {
    const errors = validationResult(req);
      const message = new Message({
        title: req.body.title,
        author: req.user._id,
        timestamp: new Date(),
        content: req.body.message,
      });
      if (!errors.isEmpty()) {
        async.parallel(
          function (err, results) {
            if (err) {
              return next(err);
            }
            res.render("message_form", {
              message: message,
              title: "Add a message",
            });
          }
        );
        return;
      } else {
        message.save(function (err) {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      }

  }
]

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