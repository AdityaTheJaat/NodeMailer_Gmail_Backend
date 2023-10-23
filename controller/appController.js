const nodemailer = require("nodemailer");
const ContactUs = require("../model/ContactUs");
require("dotenv").config();

const sendMail = async (email, title, body) => {
	console.log("Request Received")
	try {
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
            port: 465,
            secure: true,
			auth: {
				user: process.env.MAIL,
				pass: process.env.PASS,
			},
		});
		let info = await transporter.sendMail({
			from: "TEDxLNMIIT 2k23",
			to: `${email}`,
			subject: `${title}`,
			html: `${body}`,
		});
		console.log(info);
		return info;
	} catch (err) {
		console.log("Error while sending mail!");
		console.log(err.message);
	}
};

const contactUs = async (req, res) => {
	console.log("Inside Contact Us")
	try{
		const { name, email, message } = req.body;
		const details = await ContactUs.create({name:name, emailBy:email, message:message});
		return res.status(200).json({
			success:true,
			message:"Contacted successfully!"
		})
	}	catch(err){
		return res.status(500).json({
			success:false,
			message:"Cant contact!"
		})
	}
};

module.exports = {
	sendMail, contactUs
};
