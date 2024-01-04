var eligibleMarriage = function (gender, age) {
  if (gender == "Male" && age >= 21) {
    return "Eligible for marriage";
  } else if (gender == "Female" && age >= 18) {
    return "Eligible for marriage";
  } else if (gender == "Other" && age <= 21) {
    return "Elgible for marriage";
  }
  {
    return "Not eligible for marriage";
  }
};
var result = eligibleMarriage("Male", 17);
console.log(`Male=Your age 17 is  ${result}`);

var result = eligibleMarriage("Male", 25);
console.log(`Male-Your age 25 is  ${result}`);

var result = eligibleMarriage("Female", 28);
console.log(`Female-Your age 28 is  ${result}`);

var result = eligibleMarriage("Female", 16);
console.log(`Female-Your age 16 is  ${result}`);

var result = eligibleMarriage("Other", 35);
console.log(`Other-Your age 35 is  ${result}`);

var result = eligibleMarriage("Other", 41);
console.log(`Other-Your age 41 is  ${result}`);
