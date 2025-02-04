// const mypromise  = new Promise((resolve, reject) => {
//     const sucess= true;
//     if(sucess){
//         resolve("sucesssful")
//     } else{
//         reject("fail")
//     }
// })


// mypromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() =>{
//     console.log('finally promise');

// })



const add = (a,b) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a+b), 2000)
    });
};

add(5,10)
.then((sum) => add(sum, 20))
.then((finalsum) => {
    console.log('finalsum:${finalsum}')
})
