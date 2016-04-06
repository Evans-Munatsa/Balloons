var balloons = "4 sets of red, 3 sets of blue, 3 sets of yellow.";

var split = balloons.replace(" and  ", " ").split(",");
var objects = [];

split.forEach(function(balloons) {
    objects.push(balloons.split(" sets of "));
});
console.log(objects);

var amount = [];

objects.forEach(function(balloons) {
    var sets = 3;
    var object = balloons[0];
    var answer = sets * object;
    amount.push(answer);
});
console.log(amount);

var prices = "R4 for red, R5 for blue, and R5.50 for yellow.";

var cut = prices.replace(" and", "").replace(/R/g, "").split(",");

var powers = [];
cut.forEach(function(prices) {
    powers.push(prices.split(" for"));
});
console.log(powers);

var total = [];
powers.forEach(function(prices){
  var one = prices[0] * amount[1];
  total.push(one);
});
console.log(total)
