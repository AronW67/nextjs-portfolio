const nodemailer = require('nodemailer');

export default async (req, res) => {

    const httpMethod = req.method;

    if (httpMethod !== 'POST') {
        res.status(400);
        res.headers({
            'Allow': 'POST'
        });
        res.send('You are not using a http POST method for this endpoint.');
    }    

    let body = {};

    try {
        body = JSON.parse(req.body);
    } catch (e) {
        res.status(400);
        res.send('Malformed JSON in body.');
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

    res.status(200);
    res.send(`Thanks ${body.name}! Email sent successfully!`);
}