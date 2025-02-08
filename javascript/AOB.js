







// // // array of objects
// // 1.easy to iterate over

// const users = [
//     {id:1, name:"a", age:25},

// ]

// users.forEach(user => console.log(user.name));
// users.forEach(user => console.log(user.id));
// users.forEach(user => console.log(user.age));



// // support complex data
// const orders=[
//     {
//         orderid:1,
//         customer:"A",
//         items:[
//             {product:"laptop",price:20000},
//             {product:"mouse",price:35000}
//         ]
        

//     },
//     {
//         order:2,
//         cuntomer:"b",
//         items:[
//             {product:"bat",price:500},
//             {product:"ball",price}
//         ]
//     }

// ]
// orders.forEach(order => console.log)(orders.customer);

// // flexibility with data

// const products = [
//     {id:1, name:"A",price:10000},
//     {id:1, name:"A"}
// ]


// // filtering and searching

// const users = [
//     {id:1, name:"a", age:25},
//     {id:2, name:"b", age:24},
//     {id:3, name:"c", age:26},

// ];

// const res = users.filter(user => user.age > 20);
// console.log(res);


// easy to searialize
// const str = JSON. stringify(users)
// console.log(str);


// more modularity:

// const task = [
//     {id:1, task:"html",completed:true},
//     {id:2, task:"css",completed:false},
//     {id:1, task:"bootstrap",completed:true},

// ]

//  easy dynamic update