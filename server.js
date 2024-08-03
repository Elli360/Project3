require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const app = express();

//ADD DB MODEL
const db = require("./models");


//FORCE SYNC WHILE IN DEV
db.sequelize.sync({ /*alter:true*/  }).then(() => {
    console.log("Drop and re-sync db.");
  });

var corsOptions = {
  // origin: "http://localhost:8081"
  origin: ["https://dev-11624122.okta.com","https://toolshed.onrender.com","https://toolshed.onrender.com/login","https://localhost:3000"]
};
//COMMENT FOR THE SAKE OF COMMENT
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ADDED API ROUTE
require("./routes/toolshed-api.js")(app);


//CONFIGURE FOR HEROKU DEPLoYMENT

//  if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static('client/build'));
//   // Handle React routing, return all requests to React app
//   app.get('/*',cors(corsOptions), function(req, res) {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));

//     console.log("server in production mode");
//     // res.sendFile('client/build', 'index.html');
//   });
// }; 


//Configured to work with an already built React static site (found in client/build)
//After localhost:3000 is started up, Okta can communicate with address along with 
//DB being called from 1ocalhost:3000/api root
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static('client/build'));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile('client/build', 'index.html');
  });
  console.log("server in production mode");
}



// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});