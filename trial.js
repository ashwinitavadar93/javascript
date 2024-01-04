
 var lessNumber =function (a,b){
    console.log("Given numbers are:");
    var less =a<b ? ` ${a} is less than number`:`${b} is less than number`
    console.log(less);

}
lessNumber(10,15);
lessNumber(30,40);


console.log("========================step 2======================");
 var evenOrOdd =function(number){
    console.log(`Given no ${number}`);
    var result=number%2==0 ? `its is even number`:`it is odd number`
    console.log(result);
    
 }
 evenOrOdd(80);
 evenOrOdd(34);
