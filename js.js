//Primitive data types string 
//string declare three types single quote, double quote, and template literals;
let str='hello';
let str1="hello world";
let str3=`Hello ${str1}`;
console.log(str3);
//access the length property
let str4="javascript";
console.log(str4.length);
let str5="Line1/Line2";
console.log(str5);
//common javascript string methods
/*CharAt(index); it return the character at the specific index*/
let str6="helloakhil";
console.log(str6.charAt(4));
console.log(str6.charAt());
//at.index means the returns the character at the specified index, supporting negative indices to count from the end.
//console.log(str6.at(-1));
//slice(start,end):this means extract a portion of the string from start to end (end not included)
console.log(str6.slice(1,5));
//substring(start,end) similar to slice but does not support negative indices
console.log(str6.substring(1,4));
//modifying strings toLowerCase()/toUpperCase()/trim()/trimStart()/trimEnd()/
console.log(str6.toLowerCase());
console.log(str6.toUpperCase());
let stri=" Akhil  ";
console.log(stri.trim());
let string1="  HaiAkhil"
console.log(string1.trimStart());
let string2="Akhil-javascript   ";
console.log(string2.trimEnd());
let strr=string1.toUpperCase();
console.log(strr);
//fitst letter of the name only capitalise
let strin6="akhilprakash";
let capital=strin6.slice(0,1);
let capcase=capital.toUpperCase();
let reste=strin6.slice(1,strin6.length);
let concatena=capcase+reste;
console.log(concatena);
//console.log(capital);
//console.log(capcase);