const nodemailer = require("nodemailer");




exports.SendEmail = (user) => {

    var transporter = nodemailer.createTransport({
       
        service: 'gmail',
        auth: {
            user: 'tnm8433@gmail.com',
            pass: 'testnode123'
        }


    });

    console.log(user.email)


   



    var mailOptions = {
        from: 'tnm8433@gmail.com',
        to: 'ankitgoyal1538@gmail.com',
        subject: `Welcome to shoppkart`,
        text: `Thank you for joining shoppkart`,

    }


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Email sent" + info.response);
        }
    })
}