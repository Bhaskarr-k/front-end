const obj = {a:1,b:2,c:3}
console.log(Object.keys(obj));
console.log (Object.values(obj));
console.log(Object.entries(obj));



//seal



//obejct.getproperteyof():



//const dog = Object.create(animal)


//symbol data type:

const symbol1 = Symbol('sym1')
const symbol2 = Symbol('sym2')

const obj1 = {
    [symbol1]: "value1",
    name:"ABC"


};
