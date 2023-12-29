
console.log("===========================================String template assign Step 1-No Arguments no return value===========================");

function stringBasic()
{
    var dreamCompany="Cognizant"
    console.log(`My Dream Company is:${dreamCompany}`);

}
stringBasic()

console.log("===========================================Step 2===========================");


function hobbies()
{
    var hobbby1="Reading";
    var hobbby2="Singing";
    var hobbby3="Cooking";
    console.log(`My Hobbies are:
    ${hobbby1},
    ${hobbby2},
    ${hobbby3}`);

   var totalChar= hobbby1.length + hobbby2.length + hobbby3.length;
   console.log("Total character in the string is: ", totalChar);
}
hobbies()