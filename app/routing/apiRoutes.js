var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var lowestDiff = 100;
    var match = [];
    //loop to compare scores of user
    //with the rest of the users already saved
    for (var i = 0; i < friends.length; i++) {

      var count = 0;
      for (var index = 0; index < 10; index++) {
        count += Math.abs(friends[i].scores[index] - req.body.scores[index]);
      }

      console.log(count);
      if (count <= lowestDiff){
        lowestDiff = count;
        match[0] = friends[i];
      }

    }//for-loop

    //pushes newly entered person into list of users to be compared
    friends.push(req.body);

    res.json(match);
    console.log(match);


  });//app.post

};//exports
