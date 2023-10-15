const nodemailer = require("nodemailer");
require("dotenv").config();

const signup = async (req, res) => {
    const {email, name, number, imgUrl} = req.body;
    console.log(req)
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
        html: `<p>Payment has done by: ${name} <br/> email: ${email}<br/> phoneNumber: ${number}<br/> file link ->${imgUrl}</p>`
    };
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
