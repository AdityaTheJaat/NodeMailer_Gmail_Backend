const otpTemplate = (name, email, upiid, transactionid, number, isverify) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<div class="message">Verification Email</div>
			<div class="body">
				<p>Dear ${name},</p>
				<p>Thank you for registering for TEDxLNMIIT 2k23.</p>
        <p>Please verify your details, if details are not correct then you can reply on this same email</p>
				<h2 class="highlight">Name: ${name}</h2>
        <h2 class="highlight">Email: ${email}</h2>
        <h2 class="highlight">Number: ${number}</h2>
        <h2 class="highlight">UPI Id: ${upiid}</h2>
        <h2 class="highlight">Transaction Id: ${transactionid}</h2>
				<h2 class="highlight">Verification Status: ${isverify}</h2>
			</div>
		</div>
	</body>
	
	</html>`;
};
module.exports = otpTemplate;
