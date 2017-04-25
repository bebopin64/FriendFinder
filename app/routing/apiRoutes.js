var friends = require("../data/friends");
var index = 0;
var variance = 0;
var testVariance;

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    for(i=0;i<friends.length;i++) {
      for(j=0;j<friends[i].scores.length;j++) {
        testVariance += Math.abs(Number(friends[i].scores[j]) - Number(req.body.scores[j]));
      }
      if(testVariance > variance) {
        variance = testVariance;
        index = i;
      }
    }
    variance = 0;
    res.json(friends[index]);
    console.log(friends[index]);
  });
};