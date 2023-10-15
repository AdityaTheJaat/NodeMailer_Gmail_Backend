const nodemailer = require("nodemailer");
require("dotenv").config();

const signup = async (req, res) => {
    const {email, name, number, file} = req.body;
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true, 
		auth: {
			user: process.env.MAIL,
			pass: process.env.PASS, 
		},
	});
    const mailData = {
        from: `${"TEDxLNMIIT 2k23"} <example.com>`,
        to: "theaditya1985@gmail.com",
        subject: `Payment Confirmation email from ${email}`,
        html: `<p>Payment has done by: ${name} <br/> email: ${email}<br/> phoneNumber: ${number}<br/> file is attached below ->${file}</p>`
    };
	// let message = {
	// 	from: `${"TEDxLNMIIT 2k23"} <example.com>`, // sender address
	// 	to: "theaditya1985@gmail.com", // list of receivers
	// 	subject: "Hello ✔", // Subject line
	// 	text: "Successfully Register with us.", // plain text body
	// 	html: "<b>Successfully Register with us.</b>", // html body
	// };
	transporter
		.sendMail(mailData)
		.then((info) => {
			return res.status(201).json({
				msg: "you should receive an email",
				info: info.messageId,
				preview: nodemailer.getTestMessageUrl(info),
			});
		})
		.catch((error) => {
			return res.status(500).json({ error });
		});

};

module.exports = {
	signup,
};
