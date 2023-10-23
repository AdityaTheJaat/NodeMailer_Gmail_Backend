const mongoose = require('mongoose');
const { sendMail } = require('../controller/appController');
const otpTemplate = require('../utils/sendVerificationMail');

const contactSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  emailBy:{
    type:String,
    required:true
  },
  message:{
    type:String,
  }
})

contactSchema.pre("save", async function(next){
  if (this.isNew) {
    await sendMail(this.email, "Contact Us Mail", otpTemplate(this.name, this.emailBy, this.message))
  }  
  next();
})

module.exports = mongoose.model("Contact", contactSchema)