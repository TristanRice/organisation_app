const { validationResult } = require("express-validator/check");

module.exports = function(req, res, next) {
  const errors = validationResult(req).array( );

  if (errors.length)
    return res.json({
      "success": false,
      "errType": "invalid_data",
      "errors": errors
    });
  next( );
}
