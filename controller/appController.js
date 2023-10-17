const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (email, title, body) => {
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
    const { name, email, message } = req.body;
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
        subject: `ContactUs email from ${email}`,
        html: `<p>Email by: ${name} <br/> email: ${email}<br/> Message: ${message}<br/></p>`
    };
	transporter
		.sendMail(mailData)
		.then((info) => {
			return res.status(201).json({
				msg: "Email sent",
				info: info.messageId,
				preview: nodemailer.getTestMessageUrl(info),
			});
		})
		.catch((error) => {
			return res.status(500).json({ error });
		});

};

module.exports = {
	sendMail, contactUs
};
