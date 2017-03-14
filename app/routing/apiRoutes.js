var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    for (var i = 0; i < friends.length; i++) {
      var count = 0;
      for (var index = 0; index < 10; index++) {
        count += math.abs(friends[i].scores[index] - req.body.scores[index]);
      }
      console.log(count);
    }

    friends.push(req.body);


  });

};//exports
