const myObj = {
    NFS : "Need for speed",
    PUBG: "Players Unknown Battle-Ground"
}
for (const key in myObj) {
   //console.log(key);
   //console.log(`${key} shortcut is for ${myObj[key]}`);
   
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    //console.log(key);
   // console.log(programming[key]);
    
    
}

const map = new Map
map.set('PK','Pakistan')
map.set('IN','India')
map.set('QR','Qatar')

for (const key in map) {
   console.log(key);
   
}