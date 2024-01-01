// Stack(primitive datatype)  Heap(non-primitve datatype)

let name1 = "devesh"
let name2 = name1
console.log(name2); //gives devesh
name2 = "Paryani" //name1 does not get change
console.log(name1); //gives devesh 


//Heap
let user1 = {
    email: "hello@gmail.com",
    upi: "124@axl"
}

let user2 = user1

user2.email = "world@gmail.com" //also changes email for user1 as user2 is a refrence to user1

console.log(user1.email)
console.log(user2.email)