const router = require('express').Router()
const mandrill = require('node-mandrill')('9ec520aa0f619e0e8519752a591ebe68-us1')


router.get('/',(req,res)=>res.render('basket'))

router.get('/profile/forsale', (req, res) => {

  mandrill('/messages/send', {
    message: {
        to: [{email: 'boltayev_azizbek@mail.ru', name: 'Jim Rubenstein'}],
        from_email: 'bazizbek@gmail.com',
        subject: "Hey, what's up?",
        text: "Hello, I sent this message using mandrill."
    }
  }, function(error, response)
  {
    //uh oh, there was an error
    if (error) console.log( JSON.stringify(error) );

    //everything's good, lets see what mandrill said
    else console.log(response);
  });

})


module.exports = router
