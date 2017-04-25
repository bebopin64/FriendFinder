var express = require("express");
var parser = require("body-parser");
var app = express();
var PORT = 1337;

app.use(parser.json());
app.use(parser.urlencoded({
	extended: true
}));
app.use(parser.text());
app.use(parser.json({
	type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("Listening on port "+PORT);
})