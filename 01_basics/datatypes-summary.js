// premitive data type (7 data types) (memory based=> make changes to the copy)
// String, Number, Boolean, Null, undefined, Symbol and BigInt

// dynamically typed 
const number = 100
const isLoggedIn = false
const temp = null
let user 
const novalue = 23.12
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 3490853498034n
console.log(typeof(bigNumber));


// Non-premitive Data Types 
// Reference Based (User defined data-types) => changes may be implemnted into the original values 
// Arrays, Objects and functions
const heros = ['umer','khalid','Ali','usman']
let myobj = {
    name: "Nouman",
    age:"31",
    address: "Sialkot"
}

const myfunction = ()=>{
console.log("hello there from function");

}
const myfunction1= function(params) {
    console.log("hello there from function 1");
    
}
console.log( typeof(temp));
console.log(typeof myfunction)
// use the typof javascript function to find the data-types of both premitive and non-pemitive data-types
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Premitive), Heap (non-premitive)
//  in stack we get the copy of data-type used because it's memory based
// in Heap we get the reference of the value means changes occure in the actuall value

let name = "Nouman Haider"
let name1 = name
name1  = "Asad Mahmood" 
console.log(name);
console.log(name1);

let user1 ={
name : "Nouman Haider",
email : "numanhaider29@gmail.com"
}
let user2 = user1

user2.email = "numanhaider29@yahoo.com"
console.log(user1.email);
console.log(user2.email);
