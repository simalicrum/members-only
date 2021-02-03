var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  title: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User"},
  timestamp: { type: Date },
  content: { type: String },
});

module.exports = mongoose.model("Message", MessageSchema);