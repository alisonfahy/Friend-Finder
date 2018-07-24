// document.addEventListener("DOMContentLoaded", function() {
// $(document).ready(function() {
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Array for new profiles:
// let newProfile = []

console.log("Hello out there!!");

// // Basic route that sends the user first to the AJAX Page
// // Home page:
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
  });

  // $(document).ready(function () {
  console.log("JQ")
  // })

// Survey page:
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
  });

//  ///////ROUTES///////////////////////////////////
 // API GET route
 app.get("/api/friends", function (req, res) {
  // Return JSON for friends list
  res.json(getFriendsList());
});

function getFriendsList() {
 return newFriend;
  
}

//API POST route
 // Array for new profiles:
 let newFriend = []

app.post("/api/friends", function (req, res) {
  // Pushes the newFriend into the friends variable
  console.log(req.body);
  let newFriend = req.body;
  friends.push(newFriend);
  res.json(newFriend);
  console.log(newFriend);
});




// }); //document ready function
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });