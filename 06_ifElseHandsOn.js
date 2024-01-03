

console.log("====================================Step 1===========================");
var isEvenOrOdd =function(num)
{
    if (num%2==0) {
        return "EVEN";

        
    } else {
        return "ODD";

        
    }

   

};
 var result=isEvenOrOdd(45);
 console.log(` given number 45 is ${result}`);


 var result=isEvenOrOdd(70);
 console.log(` given number 70 is ${result}`);

 var result=isEvenOrOdd(67);
 console.log(` given number 67 is ${result}`);

 var result=isEvenOrOdd(98);
 console.log(` given number 98 is ${result}`);

 console.log("====================================Step 2===========================");

//  var eligibleVote =function(vote){
//     var  result="gender" && vote>=18 ? `this is eligible for vote ${result}`:"You are not eligible.";
//     console.log(result);
    
var eligibleVote =function(age){

if (age>=18){
   return" eligible for vote";
}
    else{
        return" not eligible for vote";

        
    }
     var age1=eligibleVote(18);
   
    

}
 var res= eligibleVote(18);
 console.log(`Your age 18 is  ${res}`);

 var res= eligibleVote(20);
 console.log(`Your age 20 is  ${res}`);

 var res= eligibleVote(17);
 console.log(`Your age 17 is  ${res}`);

 var res= eligibleVote(40);
 console.log(`Your age 40 is  ${res}`);


 console.log("====================================Step 3===========================");


var character= "JavaScript-ES6"
    if (character.length >10) {

        console.log("Given word is :JavaScript-ES6");
        console.log("It has more than 10 words");
        
    } else {
       
        console.log("It has not more than 10 words");
        
    }

    console.log("====================================Step 4===========================");

   var checkStart= function(word){
    if(word.startsWith("Java")){

        console.log(`Given word-${word},start with "java"`);
    }
    else{
        console.log(console.log `Given word-${word}, does not start with "java"`);
    }
     }
   checkStart("JavaScript Language");
   







 






