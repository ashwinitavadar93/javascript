
console.log("==================================1.1=============================");


function squareOfWordlength(){
    
  var givestring="JavaScript";
  var string=givestring.length;
  console.log(`Length of given string =>${string}`);

  var string=givestring.length* givestring.length;
  console.log(`square of length is ${string}`);

  console.log("==================================1.2=============================");


  var giveString="Google Chrome";
  var string=giveString.length;
  console.log(`Length of given string =>${string}`);

  var string=giveString.length*giveString.length;
  console.log(`square of length is ${string}`);


  console.log("==================================1.3=============================");


  var giveString="Developer Smart";
  var string=giveString.length;
  console.log(`Length of given string =>${string}`);

  var string=giveString.length*giveString.length;
  console.log(`square of length is ${string}`);

}
squareOfWordlength("JavaScript")


console.log("==================================STep 2=>2.1=============================");

function developer(){

    var str="I am Angular Developer";
    var total=str.length;
    console.log(` length of string ${total}`);
    var total=str.split(" ").length;
     console.log(`total word in string ${total}`);


     console.log("==================================2.2=============================");



     var divided=str.length/total;
     console.log(`Resulu of division ${divided}`);


     var multiply=str.length*total;
     console.log(`Result of multiplication ${multiply}`);
    
}
developer()




