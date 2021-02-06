var express = require("express");
var router = express.Router();

var message_controller = require("../controllers/messageController");

router.get("/", message_controller.message_list);

router.post("/", message_controller.message_delete_post);

module.exports = router;
