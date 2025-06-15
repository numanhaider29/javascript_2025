// arrays

const myArr = [0,1,2,3,4,5,6,7,8,9,10]
const myArray = new Array (0,1,2,3,4,5)
//console.log(myArray);
// myArray.push("numan")
// console.log(myArray);
// myArray.pop()
// console.log(myArray)
// myArray.unshift(0)
// console.log(myArray)
// myArray.shift()
// console.log(myArray);

//console.log(myArray.includes(6));
//console.log(myArray.indexOf(3));

const newArray = myArray.join();
//console.log(typeof (myArray));
//console.log(typeof (newArray));

console.log("original array", myArray)
// slice and splice 
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("after getting sliced",myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("after getting spliced", myArray)

