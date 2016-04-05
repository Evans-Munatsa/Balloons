var balloons = "4 sets of red, 3 sets of blue, 3 sets of yellow.";
var prices = "R4 for red, R5 for blue, and R5.50 for yellow.";

var split = balloons.replace(" and ", " ").split(",");
var objects =[];


var cut = prices.replace(" and ", "").split(",");

split.forEach(function(balloons){
  objects.push(balloons.split(" sets of "));
});

var powers = [];
cut.forEach(function(prices){
  powers.push(prices.split(" for"));
})

// var balloon_set = 3;
var amount = [];

objects.forEach(function(balloons){
  var sets = 3;
  var object = balloons[0];
  var answer = sets * object;
  amount.push(answer);
});
 console.log(objects);
 console.log(amount);
 console.log(powers);
