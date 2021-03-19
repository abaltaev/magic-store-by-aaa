const router = require('express').Router()
const nodemailer = require("nodemailer");


router.get('/',(req,res)=>res.render('basket'))

router.post('/', (req, res) => {
const usermail = req.session.mail
  async function main() {

    let transporter =  nodemailer.createTransport({
      service: 'Mail.ru',
      auth: {
        user: 'mr_bono1997@mail.ru',
        pass: 'bono1997'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  try{
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" mr_bono1997@mail.ru', // sender address
      to: usermail, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }catch(error){console.error(error)}
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  

  res.json('ok')

})


module.exports = router
