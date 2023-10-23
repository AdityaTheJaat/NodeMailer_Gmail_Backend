const mongoose = require('mongoose');
const otpTemplate = require('../utils/sendContactUsMail');
const { sendMail } = require('../utils/sendMail');

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
    await sendMail("theaditya1985@gmail.com", "Contact Us", otpTemplate(this.name, this.emailBy, this.message))
  }  
  next();
})

module.exports = mongoose.model("Contact", contactSchema)