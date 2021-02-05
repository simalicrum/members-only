var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: {type: String},
  last_name: {type: String},
  username: {type: String},
  password: {type: String},
  status: {type: String},
});

UserSchema.virtual("url").get(function () {
  return "/user/" + this._id;
})

UserSchema.virtual("full_name").get(function () {
  return this.first_name + " " + this.last_name;
})

module.exports = mongoose.model("User", UserSchema);