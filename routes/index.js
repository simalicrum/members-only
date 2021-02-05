var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Members Only' });
});*/

var message_controller = require("../controllers/messageController");

router.get("/", message_controller.message_list);


module.exports = router;
