const express  = require("express")
    , register = require("./register")
    , login    = require("./login");

router = express.Router( );

router.use("/", register);
router.use("/", login);

module.exports = router;
