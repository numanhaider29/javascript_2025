const useremail = []
if (useremail) {
    console.log("Got the user email");
}else{
    console.log("there is no useremail found.");   
}
//  list false values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// list of truhty values
// "0", 'false', " ", [], {},  function(){},

// how to check if the array is empty

if (useremail.length === 0) {
    console.log("Array is empty")
}
const emptyObj = {
    name:"Nouman"
}
if (Object.keys(emptyObj).length === 0) {
    console.log("the object is empty");
}else{
    console.log("the object is not empty");
    
}
// Nullish coalescing operator
let val1 = 5 ?? 10
 val1 = null ?? 15
 console.log(val1)

//  turnery operator 
// condition ? true : false
const iceTeaPrice = 85
iceTeaPrice >= 80 ? console.log("The price is greater than 80"): console.log("the price is less than 80");
