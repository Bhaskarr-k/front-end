# Array methods:
### to string():
- the tostring() returns a string with array values seperated by commas.
- and it doesnot change the original array.
- **syntax**:
- array.tostring()
- example:

let bikes = ["yamaha" ,"bajaj", "honda"]

console.log(bikes.tostring());
### join():
- the join method returns a new tring by concatenating all of the elements in an array. seperated by commas or a specified seperator string.
- **syntax**:
- array. join()(seperator)
- example:

let bikes = ["yamaha", "honda","tvs"]

console.log(bikes.join());

console.log(bikes.join(""));

console.log(bikes.join("-"));


### pop():
- the pop method removes the last element of an array. and it returns the removed element.
- and this method changes th eoriginal array
- **syntax**:
- array. pop()

let bikes = ["yamaha", "honda","tvs"]

console.log(bikes.pop());

console.log(bikes)

### push():
- the push method adds new items to the end of an array and its changes the length  of the array.
- returns the new length
- **syntax**:

let bikes = ["yamaha", "honda","tvs"]

console.log(bikes.push('raoyal','enfield'));

console.log(bikes);


### shift():
- the shift() method removes the first elelment and returns it
- **syntax**
- array.shift();

let bikes = ["yamaha", "honda","tvs"]

console.log(bikes.shift());

console.log(bikes);


### unshift:
- the unshift() adds element to beginging and returns new array length
- **syntax**
- array.unshift(item1,ietem2,..........)

let bikes = ["yamaha", "honda","tvs"]

console.log(bikes.unshift("bmw"));

console.log(bikes);

### delete:
- array elements can be deleted using the javascript opertor mode
- using delete leaves undefined holes in the array
- **syntax**
- delete array[index];

let fruits = ["banana", "apple","cherry"];

delete fruits[1];

console.log(fruits);

### concat():
- the concat mehtod concatenetes or joins two or more arrays. returns a new array containing the joined arrays

- this method does not change the existing arrays

- **syntax**
- array1. concat(arrray2,array3,...........,arrayx)


let arr1 = [1,2,3];

let arr2 = [23,45,32];

let arr3 = [111,12];

let arrnew = arr1.concat(arr2,arr3);

console.log(arrnew)


### sort():
- the sort method sorts the elements of an array and override the original array
- sorts the elements as strings in alphabetical and ascending order
- **syntax**:
- array.sort(compareFunction);

let arr = [10,11,14,16];

let str = ["apple","banana","cherry"];

arr.sort();

console.log(arr)

str.sort();

console.log(str)';



### splice();
- the splice method adds and or removes the array elements 
- the splice method overwrits the original array
- **syntax**
- array.splice(index, howmany, item1,.....itemx);

let array = [10,11,15,16,19]

array.splice(2,3,"a","b")

console.log(array);


### slice():
- the slice method slice sout a piecce from an array it creates a new array
- **syntax**
- array.slice(start, end);


let number = [1,2,3,4,4,5,5];

let number1 = number.slice(1,4);

console.log(num2);

### reverse():
- the reverse method reverts the order of the elements in an array
- this methid overwrites the original array

- **syntax**
- array.reverse();

let number = [1,2,3,4,5,5,6];

let string = ["a","b","c","d"];

numbers.reverse();

console.log(numbers);

string.reverse();

console.log(string);

### isArray():
- the isArray() method returns true if an object is an array. otherwise false
- check if an object is an array

- **syntax**:
- array.isArray(obj);

let number = [1,2,3,4,5,5,6];

let string = ["a","b","c","d"];

console.log(array.isArray(numbers));

console.log(array.isArray(string));

### indexof():
- the indexof() method returns the first index [position] of a specified value, returns -1 if the value is not found.
- andit searches from left to righ.
- negative start values conuts from th elast element
- **syntax**:
- array. indexOF(item,start);

let elements = ["laptop","headset","mobile"]

console.log(elements.indexOF("mnobile", 0));

console.log(elements.indexOF("mobile", 3));

### lastindexof():
- the lastindexof() method returns the last index [position] of  a specified value, returns -1 if the value is not found.
- start at a specified index and searches from rigth to left.
- negative start values counts from the last element
- **syntax**
- array.lastindexof()(item, start);

let elements = ["laptop","mobile","camera","router"];

console.log(elements.indexof("mobile", 0));

console.log(elements.lastindexof("mobile", 4));

### find():
- the find method returns the first element in the provided array that satisfies the provided testing function.

- if no values satisfy the testing function, undefined is returned.

- **syntax**:
- find((element) => {/*..........*/});


const arr = [5,13,16,19];

const found = array.find((element) => element > 10);

console.log(found);


### findindex():
- the findindex method returns the index of the first element in an array that satisfies the provided testing function.
- if no elements satisfy the testing function then -1 is returned.
- **syntax**:
- array.firstindex(function(currentvalue, index, arr),thisvalue);



const arr = [5,12,14,18];

const isLargeNumber = (element) => element > 13;


console.log(array1.findindex(isLargeNumber));

### includes():
- the includes method returns true if an array contains a specified value.
- if the value is not found returns false.
- **syntax**:
- array.includes(element, start);


const num = [1,2,3];

console.log(num.includes(2));

const str = ["cat","mat","bat"];

console.log(str.includes("cat"));

### entries():
- the entries method returns an aray iterator object with key and value pairs
- and this method does not change the original array

const days = ["sun","mon","tue","wed","thu","fri","sat"];

const day = days.entries();

for (let x of day) {

    console.log(x + "\n");

}

### every:
- the every method tests whether all elements in the array pass the test implemented by yhe provided function.
- it returns a boolen value

const arr1 = [1,2,3,4,5,5];

const isBelow_1 = (currentvalue) => currentvalur < 40;

console.log(arrray1.every(isBelow));

const isBelow_2 = (currentvalue) => currentvalue < 30;

console.log(array1.every(isBelow_2));


### some:
- the some method tests whther at least one element in the array passes the test implemented by the provided funtion.
- it retruns true if inthe array it finds an element for which the proided function returns true
- otherwise it retruns false.
- it doesnot modfify the array


const ages = [3,10,18,20];

ages.some(checkAdualt(age)) {
    
    return age > 18;

}

### fill:
- the fill method fills specified elements in an array with a value method overwrites the original array.
- start and position cna be specified of not all elements will be filled

const fruits  = ["banana", "orange", "apple", "mango"];

fruits.fill('kiwi);


### copywithin():
- the copywithin() method copies array elements to another position inthe array and this method overwrites the existing values
- the copywithin method does not add items to the array
- **syntax**
- array.copywithin(target, start, end);

const fruits = ["banana","apple","cherry"];

fruits.copywithin(2,0);

### valueof():
- the valueof() method returns the array itself.
- and this method does not change the original array
- fruits.valueof() retruns the same as fruit
- **syntax**
- array.valueof();

const fruits = ["banana","apple","cherry]

const myArray = fruits.valueof();

### foreach():
- the foreach method executes a provided function once for each array element.
- and this method is not executed for empty elements
- **syntax**:
- array.foreach(function(surrentvalue,index,arr), thisvalue)

const numbers = [65, 44,12,4];

numbers.foreach(myfunction)

function myfunction(item, index, arr) {

    arr[index] = item * 10;

}

### filter():
- the filter method creates a new arry filled with elements that pass a test provided by a function.
- and this method does not change the original array
- **syntax**:
- array.filter(function(currentvalue, index, arr), thisvalue)

const ages = [32,33,16,40]

const result = ages.filter(checkAdult);

function checkAdult(age) {

    return age > =18;

}

### reduce:
- the reduce method executes a reduce function for array element.
- and this method retruns a single value the funciton accumlated result
- **syntax**:
- array.reduce(function(total, currentvalue, currentindex, arr), initialvalue);

const numers = [175, 50,25];

numbers.reduce(myfunc);

function myfunc(total, num) {

    return total - num;
}

### from():
- the array.from() method returns an array from any object with a length property
- and this method returns an array from any iterable object.

- **syntax**
array.from(object, mapfunction, thisvalue);

console.log(array.from("code"))





