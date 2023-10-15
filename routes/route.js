const router = require('express').Router();

const { signup } = require('../controller/appController.js')

router.post('/sendMail', signup);


module.exports = router;