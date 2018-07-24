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