function sendMail(address, foodList){

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                        user: 'FoodAlertDewickCarmichael',
                        pass: 'macPhieFTW'
                }
        });

content = "Foods you might be interested in :\n";
for (i = 0; i < foodList.length; ++i)
        content += foodList[i] + "\n";

var mailOptions = {
        from: 'FoodAlertDewickCharmichael',
        to: address,
        subject: 'Food you like is in Dewick!',
        text: content
};

transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                        console.log(error);
                } else {
                        console.log('Email sent: ' + info.response);
                }
        });
}