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