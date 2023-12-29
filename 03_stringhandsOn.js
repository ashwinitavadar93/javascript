
console.log("===============================================Step 1===================================");

function stringHandsOn()
{
    var givenString="   Hey you are doing good, keep it up    ";
    console.log(`Given String is: =>${givenString}`);

    console.log("===============================================Step 2===================================");
 
    
    var string= givenString.length
    console.log(`Length of Given String is: =>${string}`);

    console.log("===============================================Step 3===================================");
 

    var trimResult=givenString.trim();
    console.log(` After trim city is: ${trimResult}, It's length is: ${trimResult.length} `);

    console.log("=================================================step 4================================");

    var removeString= givenString.length-trimResult.length
    console.log(`Removed spaces from string:${removeString}`);


    console.log("=================================================step 5================================");

    
   var firstChar=trimResult.charAt(0);
   var lastChar=trimResult.charAt(trimResult.length-1);
   console.log(`First Character:${firstChar}`);
   console.log(`Last character:${lastChar}`);

   console.log("=================================================step 6================================");

  var total=trimResult.split(" ");
  console.log(`Total Words of character of string:${total.length}`);

  console.log("=================================================step 7================================");


var indexOf=trimResult.indexOf("good");
console.log("Index of word good:",indexOf );


console.log("=================================================step 8================================");

var result = trimResult.slice(22);
console.log(` Substring is: ${result}  `);
var result = trimResult.slice(22);
console.log(` Slice is: ${result}  `);

console.log("=================================================step 9 step 10================================");

 var isAvailable=trimResult.startsWith("Hey");
 console.log(`is string start with "Hey":${isAvailable}`)

 var isAvailable=trimResult.endsWith("up");
 console.log(`ins string ends with "Up:${isAvailable}`);


}
stringHandsOn();