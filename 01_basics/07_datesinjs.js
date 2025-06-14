let mydate = new Date();
// console.log(mydate.toString());
//console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
let myBirthday = new Date(1992, 10, 22);
console.log(myBirthday.toDateString());

let mytimeStamp = Date.now();

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());


console.log( newDate.toLocaleString('default', {
    weekday: "long"
   

}))

