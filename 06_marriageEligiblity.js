// var eligibleMarriage = function (gender, age) {
//   if (gender == "Male" && age >= 21) {
//     return "Eligible for marriage";
//   } else if (gender == "Female" && age >= 18) {
//     return "Eligible for marriage";
//   } else if (gender == "Other" && age <= 21) {
//     return "Elgible for marriage";
//   }
//   {
//     return "Not eligible for marriage";
//   }
// };
// var result = eligibleMarriage("Male", 17);
// console.log(`Male=Your age 17 is  ${result}`);

// var result = eligibleMarriage("Male", 25);
// console.log(`Male-Your age 25 is  ${result}`);

// var result = eligibleMarriage("Female", 28);
// console.log(`Female-Your age 28 is  ${result}`);

// var result = eligibleMarriage("Female", 16);
// console.log(`Female-Your age 16 is  ${result}`);

// var result = eligibleMarriage("Other", 35);
// console.log(`Other-Your age 35 is  ${result}`);

// var result = eligibleMarriage("Other", 41);
// console.log(`Other-Your age 41 is  ${result}`);

var marriageEligiblity=function(gender,age) {
    if (age<=0 || age>100|| age==undefined||isNaN (age)){
console.log(`gender=${gender} age=${age}`);
console.log(`{age is invialid input}`);


}        
     else {
        if (age>=21 && gender=="Male" || age>=18 && gender=="Female") {
            console.log(`Gender =${gender} age=${age}`);
            console.log(`You are eligible for marriage`);
            console.log();
            
        } else {
            console.log(`Gender =${gender} age=${age}`);
            console.log(`You are not eligible for marriage`);
            console.log();
            
        }
        
    }
    
}
marriageEligiblity("Male",17);
marriageEligiblity("Male",25);
marriageEligiblity("Female",28);
marriageEligiblity("Female",16);
marriageEligiblity("Other",35);
marriageEligiblity("other",41);
