//spread operator
/* spread operator is denoted by(...)three dots and it is expan or spread iterable elements like array object string in to individual elements */
//spread operator is used to copying an array merging and array, sreading function argument,adding  elemetns in to array.spreading strings into an array

//1 copying an array
let array1=[1,2,3,4,5];
let copy=[...array1];
console.log(copy);
//2 mergin an array
let array2=[1,2,3,4];
let array3=[5,6,7,8];
console.log(...array2,...array3);

//3 spreading function arguments 
const num=[1,2,3];
function add(x,y,z){

    return x+y+z; 
}
console.log(add(...num));
//copying and merging object
const obj1={a:1,b:2,c:3};
const obj2={d:1,e:2,f:3};
const mergobje={...obj1,...obj2};
console.log(mergobje);

//4 spreading string into an array

let str="apple";
let nestr=[...str];
console.log(nestr);

//5 adding elemtnsto array easily
let fruits=["apple","orange","pineapple","pappaya"];
let fruit=[...fruits,"grape"];
console.log(fruit);