"use strict"; //use newer version of js

//alert(3+3) cannot be used because we are using nodejs not browser//

let name = "Devesh"
let age = 18
let isloggedin = false

//number -> 2^53
//bigint
//string -> ""
//boolean -> true/false
//null -> standalone value
//undefined -> no value assinged
// symbol -> unique
//object

console.log(typeof "devesh"); //gives datatype
console.log(typeof null); //gives output object
console.log(typeof undefined); //gives output undefined

/********Summary/Important things**********/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const outsideTemp = null //datatype is object

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //gives false as symbol is used to make thing unique

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {                       //object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){      //function
    console.log("Hello world");
}
