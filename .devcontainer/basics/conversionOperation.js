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



