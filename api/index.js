const express  = require("express")
    , path     = require("path")
    , mongoose = require("mongoose")
    , routes   = require("./routes")
		, parser   = require("body-parser");

require("./passport");

const app  = express( );

app.use(express.static(path.resolve(__dirname, "static")));

app.use(parser.json());

app.use("/api", routes);

const port = process.env.port || 3000;

const prod = process.env.NODE_ENV === "production";

//connect to database
const mongo_uri = process.env.MONGO_URI ||
  "mongodb+srv://nmika:YeLWO8yJzKeSejpm@cluster0-fch54.mongodb.net/organisation_app";

mongoose.connect(mongo_uri, {useNewUrlParser: true});

app.listen(port, function( ) {
	console.log(`[*] Listening on port ${port}`);
});
