let score = undefined;
console.log(typeof score);
let valueInNumber = Number(score); //conversion from string to number 
console.log(typeof valueInNumber);
console.log(valueInNumber);

// score -> "33" -> 33
//          "33abc" -> NaN
//           null -> 0
//          undefined->Nan
//          true->1  false->0

let isLoggedIn = 18;

let stringNumber = Boolean(isLoggedIn)

console.log(stringNumber);

//isLoggedIn -> 1(>0) -> true
//           -> "" -> false
//           -> "Devesh" -> true

//************OPERATIONS****************/

console.log("1"+2)  //=12
console.log("1"+2+2) //=122
console.log(1+2+"2") //=32

console.log(true) //=true
console.log(+true) //=1 converts true to number
console.log(+"")  //=0 coverts false to number

console.log("2">2); //=false converts "2" to number 

console.log(null>0) //false
console.log(null==0) //false (comparison and greater/less than operator work in different ways in js)
console.log(null>=0) //true

console.log(undefined>0) //false
console.log(undefined==0) //false 
console.log(undefined>=0) //false

console.log("2" === 2) //false as === compares datatype also




