const myNums = [1,2,3,4,5]
const mytotal =  myNums.reduce((acc, currval)=>{
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval
},0)
console.log(mytotal);
