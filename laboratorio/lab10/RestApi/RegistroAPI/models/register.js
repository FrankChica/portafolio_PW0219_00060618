const mongoose = require("mongoose");


const RegisterSchema = mongoose.Schema({
carnet: String,
schedule: String,
isLate: Boolean,
datetime: Date,
});

module.exports = mongoose.model("Register",  RegisterSchema);