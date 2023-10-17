const router = require('express').Router();

const { contactUs } = require('../controller/appController.js');
const { signup } = require('../controller/register.js');

router.post('/contact', contactUs);
router.post('/signup', signup)


module.exports = router;