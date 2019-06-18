const request = require("request");

function verifyRecaptcha(req, res, next) {
  //this is just used to be able to test the API easily. 
  if (!req.query.useRecaptcha) next( ); //remove this in production
  const response = req.body["g-recaptcha-response"];
  if (!response)
    return res.json({
      "success": false,
      "msg": "Captcha verification failed"
    });

  const recaptchaSecretKey = "6LeYjqkUAAAAAIqH4B_wMAkhWGSOmCt9WY2Uqb2k";

  const verificationUrl ="https://www.google.com/recaptcha/api/siteverify?secret="+
      recaptchaSecretKey + "&response=" + response + "&remoteip=" + req.connection.remoteAddress;

  request(verificationUrl, function(err, response, body) {
    const body = JSON.parse(body);
    if (!body.success)
      return res.json({
        "success": false,
        "msg": "Captcha verification failed"
      });
    next( );
  });
}

module.exports = verifyRecaptcha;
