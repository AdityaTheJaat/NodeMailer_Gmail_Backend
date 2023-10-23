// const nodemailer = require("nodemailer");
const ContactUs = require("../model/ContactUs");
// const { sendMail } = require("./appController");
const otpTemplate = require("../utils/sendContactUsMail");
const { sendMail } = require("../utils/sendMail");
require("dotenv").config();

// exports.sendMail = async (email, title, body) => {
// 	console.log("Request Received")
// 	try {
// 		let transporter = nodemailer.createTransport({
// 			host: "smtp.gmail.com",
//             port: 465,
//             secure: true,
// 			auth: {
// 				user: process.env.MAIL,
// 				pass: process.env.PASS,
// 			},
// 		});
// 		let info = await transporter.sendMail({
// 			from: "TEDxLNMIIT 2k23",
// 			to: `${email}`,
// 			subject: `${title}`,
// 			html: `${body}`,
// 		});
// 		console.log(info);
// 		return info;
// 	} catch (err) {
// 		console.log("Error while sending mail!");
// 		console.log(err.message);
// 		return;
// 	}
// };

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
