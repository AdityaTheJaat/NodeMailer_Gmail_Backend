const mongoose = require('mongoose');
const otpTemplate = require('../utils/sendVerificationMail');
const { sendMail } = require('../utils/sendMail');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  upiId:{
    type:String,
    required:true
  },
  transactionId:{
    type:String,
    required:true
  },
  isVerified: {
    type: Boolean,
    default : false,
    required: false
  }
})

userSchema.pre("save", async function(next){
  if (this.isNew) {
    await sendMail(this.email, "Your submitted details", otpTemplate(this.name, this.email, this.upiId, this.transactionId, this.number, this.isVerified))
    await sendMail("theaditya1985@gmail.com", "New Ticket Ordered", this.email)
  }  
  next();
})

module.exports = mongoose.model("User", userSchema)