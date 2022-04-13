const express = require('express');
const {processPayment ,sendStripeApiKey} = require('../Controller/PaymentControl');
const router= express.Router();

const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require('./verifyToken');


router.route("/payment/process").post(verifyToken, processPayment);

router.route("/stripeapikey").get(verifyToken,sendStripeApiKey);

module.exports = router;