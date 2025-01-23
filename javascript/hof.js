// function mathoperation(a,b,operation){
//     return operation(a,b)
// };
// function add(a,b){
//     return a+b
// }
// function multiply(a,b){
//     return a*b
// }

// console.log(mathoperation(3,5,add));
// console.log(mathoperation(3,5,multiply));



//callback function:

// function myfunction(callback){
//     setTimeout(function(){
//         callback()
//     }, 2000)
// }

// function callbackFunction(message){
//     console.log(message);

// }
// myfunction(callbackFunction)

//currying:


// function curryFn(x){
//     return function(y){
//         return function(z){
//             return x * y * z

//         }
        
//     }
// }

// const res = curryFn(3)
// const res1 = res(5)
// const res2 = res1(7)
// console.log(res2);


//function composition:

// function addtwo(x){
//     return x + 2
// };
// function multiplyByThree(x){
//     return x * 3
// };

// const composedFunction = (x) => multiplyByThree(addtwo(x))
// console.log(composedFunction(5));


//Memoization



function memoize(fn){
    const cache = {};

    return function(...args){
        const key = JSON.stringify(args)
        if (cache[key]){
            console.log('fetching from cache');
            return cache{key}
        }else{
            console.log('calculating the request');
            const result = fn(...args)
            cache[key] = result
            return result
       }

    }
};




