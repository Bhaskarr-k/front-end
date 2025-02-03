// using call back function
function myFun(callback){
    setTimeout(() => {
        const data = {name: 'basu', age:24};
        callback(data)
        
    },1000);
}
myFun((data) => {
    console.log("data:",data)
});



// using promise

