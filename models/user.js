const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userId: {
      type: String,
    }, //pour ne pas utiliser le id de mongo
    name: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  this.userId = uuidv4();
  next();
});
userSchema.plugin(uniqueValidator); //avoir une seule donnée non repeté dans notre base
const user = mongoose.model("User", userSchema);

module.exports = user;
