//brings in .env files
require("dotenv").config();
//brings in express
let express = require("express");
let cors = require("cors");

let routes = require("./routes");


let PORT = process.env.PORT || 8000;
//stores "express" in app, allowing us to use variable
let app = express();

app.use(cors());
//allows us to use json...must come before routes
app.use(express.json());

//allows us to bring in routes file
app.use(routes);

//allows us to use static file...our "public" file
// app.use(express.static("./public"));

// app.use(express.static(__dirname + "/../client/build"));

// expressApp.get("/", function(req,res){
//   res.sendFile(__dirname + "/client/build/index.html")
// })

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/../client/build/index.html");
// });

//establishes what local port we will be using

//allows our app to "listen" for incoming request
app.listen(PORT, function () {
  console.log("app is listening at port", PORT);
});
