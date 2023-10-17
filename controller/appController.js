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
// module.exports = sendMail;

// const sendMail = async (req, res,) => {
//     let transporter = nodemailer.createTransport({
//         host: "smtp.gmail.com",
//         port: 465,
//         secure: true,
//         auth: {
//             user: process.env.MAIL,
//             pass: process.env.PASS,
//         },
//     });
//     const mailData = {
//         from: `${"TEDxLNMIIT 2k23"} <example.com>`,
//         to: "theaditya1985@gmail.com",
//         subject: `Payment Confirmation email from ${email}`,
//         html: `<p>Payment has done by: ${name} <br/> email: ${email}<br/> phoneNumber: ${number}<br/> file link ->${imgUrl}</p>`
//     };
//     const mailDataForUser = {
//         from: `${"TEDxLNMIIT 2k23"} <example.com>`,
//         to: `${email}`,
//         subject: `Payment Confirmation email from ${email}`,
//         html: `Payment details are not shared properly please try again`
//     };
//     if(!email || !name || !number || !imgUrl){
//         transporter.sendMail(mailDataForUser);
//         return res.status(400).json({msg: "Please fill all fields"})
//     }
// 	transporter
// 		.sendMail(mailData)
// 		.then((info) => {
// 			return res.status(201).json({
// 				msg: "you should receive an email",
// 				info: info.messageId,
// 				preview: nodemailer.getTestMessageUrl(info),
// 			});
// 		})
// 		.catch((error) => {
// 			return res.status(500).json({ error });
// 		});

// };

module.exports = {
	sendMail,
};
