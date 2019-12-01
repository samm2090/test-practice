const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const RoleEnum = { Admin: "admin", Client: "client", Investor: "investor" };

const UserSchema = new Schema({
  name:{
    type:String
  },  
  username:{
    type:String
  },
  email: {
    type: String
  },
  ruc: {
    type: String
  },
  password: {
    type: String
  },
  role: {
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

module.exports.User = mongoose.model("User", UserSchema);
