var a=10;
var b=a++;
console.log (b);

var result= 0/0;
console.log(result);

var result=100+true;
console.log(result);//implicit coversion =>automatic conversion

var resultvalue=99-false;
console.log(resultvalue);//implict conversion

console.log("1"+"1");//concat

var s1="101";
console.log(typeof s1);

var s2=+s1;
console.log(s2);
console.log(typeof s2);

var d=+"200";
console.log(d);
console.log(typeof d);

var z=+"ashu";
console.log(z);

var d=Number("101");
console.log(typeof d);

var s1="200A";
var res=Number(s1);
console.log(typeof res);
console.log(res);

var p= Boolean(10);
console.log(p);