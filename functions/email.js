const nodemailer = require('nodemailer');

exports.handler = (event) => {

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 400,
            body: 'You are not using a http POST method for this endpoint.',
            headers: {
                'Allow': 'POST'
            }
        }
    }    

    let body = {};

    try {
        body = JSON.parse(event.body);
    } catch (e) {
        return {
            statusCode: 400,
            body: 'Please make sure that payload is of type String.',
        }
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aron.uts.testmail@gmail.com',
          pass: 'qjwzvbjwcyukjjsi'
        }
    });

    var mailOptions = {
        from: body.email,
        to: 'aronw67@gmail.com', 
        subject: `Portfolio email from ${body.name} - ${body.subject}`,
        text: body.message
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

    return {
        statusCode: 200,
        body: `Thanks ${body.name}! Email sent successfully!`
    }
}