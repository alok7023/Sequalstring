const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  Permissions: {
    type:[String],
    required:true
  }
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;