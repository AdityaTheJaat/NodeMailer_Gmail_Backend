const router = require('express').Router();

const { sendMail } = require('../controller/appController.js');
const { signup } = require('../controller/register.js');

router.post('/sendMail', sendMail);
router.post('/signup', signup)


module.exports = router;