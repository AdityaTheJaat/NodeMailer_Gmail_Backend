const ContactUs = require("../model/ContactUs");
require("dotenv").config();

exports.contactUs = async (req, res) => {
	console.log("Inside Contact Us")
	try{
		const { name, email, message } = req.body;
		console.log(name)
		const details = await ContactUs.create({name:name, emailBy:email, message:message});
		return res.status(200).json({
			success:true,
			message:"Contacted successfully!",
			details
		})
	}	catch(err){
		console.log(err)
		return res.status(500).json({
			success:false,
			message:"Cant contact!"
		})
	}
};
