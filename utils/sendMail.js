const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = async (email, title, body) => {
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
		return;
	}
};