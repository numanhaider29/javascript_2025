// for of 

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9,10]

for (const element of arr) {
   // console.log(element);
    
}
const greetings = "Hello world!"
for (const greet of greetings) {
 //   console.log(greet);
    
}

// maps

const map = new Map
map.set('PK','Pakistan')
map.set('IN','India')
map.set('QR','Qatar')
//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',value);
}
const myObj = {
    'NFS':'Need for Speed',
    'PUBG':'Players Unknown Battle grounds'
}

// for (const [key,value] of myObj) {
//     console.log(key, ':-', value);
    
// }