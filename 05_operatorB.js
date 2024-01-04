
console.log("======================================Step 1 ============================");

function greaterNumber(a,b){
    console.log(`Given Numbers are ${a},${b}`);
  var greater =a>b ? ` ${a} is greater than number` :`${b} is grater than`;
console.log(greater);


}

greaterNumber(10,-10);
greaterNumber(800,899);


console.log(("=====================================Step 2======================="));

function isEvenOrOddNum(){

    var num=29;
    var result=num%2;
    var resultValue = result== 0 ? " Given number is Even " : "It is Odd number"; 
    console.log("Given no is:29");
    console.log(resultValue);

    console.log("=============================================================");

    var num=44;
    var result=num%2;
    var resultValue=result== 0 ? " Given number is Even " : "It is Odd number"; 
    console.log("Given no is:44");
    console.log(resultValue);

    console.log("=============================================================");

    var num=0;
    var result=num%2;
    var resultValue=result== 0 ? " Given number is Even " : "It is Odd number"; 
    console.log("Given no is:0");
    console.log(resultValue);

    console.log("=============================================================");


    var num=101;
    var result=num%2;
    var resultValue=result== 0 ? " Given number is Even " : "It is Odd number"; 
    console.log("Given no is:101");
    console.log(resultValue);

}
isEvenOrOddNum()


    console.log("==================================step 3===========================");
    function wordlength(){

        var str="JavaScript";
        var total=str.length;
        console.log(`lenght of string ${total}`);
        var num=10;
     var str=total%2;
     var resultValue=str== 0 ? " Given number is Even " : "It is Odd number"; 
    console.log(resultValue);

    console.log("=============================================================");



    var str="Developer";
    var total=str.length;
    console.log(`lenght of string ${total}`);
    var num=10;
 var str=total%2;
 var resultValue=str== 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);

console.log("=============================================================");



var str="Google";
var total=str.length;
console.log(`lenght of string ${total}`);
var num=10;
var str=total%2;
var resultValue=str== 0 ? " Given number is Even " : "It is Odd number"; 
console.log(resultValue);



    }
    wordlength()

    




