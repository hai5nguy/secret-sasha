const nodemailer = require('nodemailer');

const send = ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hainagooyen@gmail.com',
            pass: 'H5@common',
        },
    });


    const mailOptions = {
        from: 'hainagooyen@gmail.com',
        to,
        subject,
        html,
    }

    return transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('email sent')
        }
    });
}

module.exports = { send }
