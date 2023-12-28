
console.log("===================================Step 1-No argumnets and no return type===============================");
function funName()
{
    console.log("output-No argumetns and no return value");

}
funName();
function functionName()
{
    console.log("Output-No Arguments and no return value");
}
functionName();

console.log("===================================Step 2-Function with arguments===============================");

function personalDetails(firstName,lastName,collegeName)
{
    console.log("My First Name is:",firstName);

   console.log("My last Name is:",lastName);
   console.log("My College Name is:",collegeName);
}
personalDetails("Ashwini","Tavadar","Shivaji University Kolhapur");

console.log("===================================Step 3-Function with arguments and no return===============================");

function swapValues(num1,num2)
{
    console.log("Before Swap Values")

    console.log("Values1->",num1);
    console.log("Values2->",num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log(" After Swap value:")

    console.log("Values1->",num1);
    console.log("Values2->",num2);

}
swapValues("Virat","Anushka");
console.log("=================================================================");

swapValues("1000","2000");

console.log("===================================Step 4-Function with 3 parameter or arguments adition===============================");

function addThreeValue(arg1,arg2,arg3)
{
    console.log("Given values are:",arg1,arg2,arg3);
    var result=arg1+arg2+arg3;
    return result;

}

var result=addThreeValue(10.23,600,40);
console.log("Addition is:",result);

var result=addThreeValue("Hello","Good","Morning");
console.log("Addition is:",result);







