const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RoleEnum = { Admin: "admin", Client: "client", Investor: "investor" };

const UserSchema = new Schema({
  username:{
    type:String
  },
  firstName: {
    type: String
  },
  fatherLastName: {
    type: String
  },
  motherLastName: {
    type: String
  },
  gender: {
    type: String
  },
  email: {
    type: String
  },
  mobileNumber: {
    type: String
  },
  ruc: {
    type: String
  },
  businessName: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String
  },
  department: {
    type: String
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  registrationDate: {
    type: Date,
    default: Date.now()
  }
},
{ 
  timestamps: true,
});

var User = mongoose.model("User", UserSchema);
module.exports = { User, RoleEnum };
