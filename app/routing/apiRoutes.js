var friends = require("../data/friends");

module.exports = function(app) {

  //retrieves objects from array of users
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //posts new user into array of users &
  //decides best match based on lowest difference in answers
  app.post("/api/friends", function(req, res) {

    const numOfQuestions = 10;
    var match = []; //holds matched friend

    //loop to go through all users
    for (var i = 0; i < friends.length; i++) {

      var count = 0;
      //loop to go through user's answers
      for (var index = 0; index < numOfQuestions; index++) {
        count += Math.abs(friends[i].scores[index] - req.body.scores[index]);
      }
      console.log(count);

      //if an user's score is lower than the previous user's
      //then set him as a match or else keep the previous
      //the match (multiple users with same scores can be matches)
      if (i == 0 || count == match[0]) {
        match.push(friends[i]);
      } else if (count < match[0]){
        match.length = 0;
        match.push(friends[i]);
      }

    }//for-loop

    //pushes newly entered person into list of users to be compared
    //for next survey filled
    friends.push(req.body);

    //returns matched user
    res.json(match);
    console.log(match);


  });//app.post

};//exports
