//Function expression use
console.log("==================================Step 1=========================");
var maleMarriageEligibility = function(gender,age,boyName){
    var result = gender=="Male" && age>=21 
     ?  `Hey ${boyName} you are eligible for Marriage` 
     : " Unfortunately Stew Jobs - You are not eligible, Please try next time."; 
     console.log(result);
 }
 maleMarriageEligibility("Male", 25, "Billgates");
 maleMarriageEligibility("Male",17,"Stew jobs");

console.log("==================================Step 2=========================");

var femaleMarriageEligibility = function(gender,age,girlName){
    var result = gender=="Female" && age>=18
     ?  `Hey ${girlName} you are eligible for Marriage` 
     : " Unfortunately Jenifer - You are not eligible, Please try next time."; 
     console.log(result);
 }
 
 femaleMarriageEligibility("Female",27,"Malinda Gates");
 femaleMarriageEligibility("Female", 16, "Jenifer");
 
