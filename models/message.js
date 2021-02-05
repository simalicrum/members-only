var mongoose = require("mongoose");
const { DateTime } = require("luxon");

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  title: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User"},
  timestamp: { type: Date },
  content: { type: String },
});

MessageSchema.virtual("timestamp_formatted").get(function () {
  return this.timestamp ? DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_MED) : ""
})

module.exports = mongoose.model("Message", MessageSchema);