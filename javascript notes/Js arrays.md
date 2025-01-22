# javascript arrays:
- javascript arrays are a data structure use to store multiple values in a single variable. 
- Arrays are versatile and can hold elements of any type  sucha s strings, numbers, objects, or even other arrays.
- Arrays can stored homogenious and hetrogenious.
- homogeniuos means same data type and hetro means diffrent data type.
- Array declaring by using square brackets.
## Declaring arrays:
- you can delare arrays in javscript in twol main ways.
### using square brackets:
- const fruits = ["apple","banana","cherry"];
### using the array constructor:
- const fruits = new array("apple","banana","cherry");

## Accessing elements:
- Array elements are accessed using zero-base indexing.
- console.log(fruits[0]); // "apple"
- console.log(fruits[2]); // "cherry"
## common operations:
### Add elements:
- **push**: by using push method we can add item to end of the array.
- ex: fruits.push("date");
- **Unshift**:  by using unshift we can add item begining of the array.
- ex: fruits.Unshift("date");
### Remove elements:
- **pop**: by using pop methid we can remove end of the item.
- ex: fruits.pop();
- if we want to remove particular item then we can use index number in paranthesis.
- ex: fruits.pop(1);
- **shift**: by using shuft methid we can remove behining of the item in array.
- ex: fruits.shift();
### iterate over elements:
- **foreach**: 

- ex: fruits.forEach(fruit => console.log(fruit));
### manipulate elements:
- **slice**: extract a portion without modifying hte original array.
- ex: const sliced = fruits.slice(1, 3); // ["banana", "cherry"]

- **splice**: add and remove elements in place.
- ex: fruits.splice(1, 1, "blueberry");
- the above example index number 1 item replace with buleberry.
### find elements:
- **indexof**: it is given index value of the item.
- ex: const index = fruits.indexOf("cherry");
- **check if value exists**: given item in array or not it is working like this item is there means TRUE and otherwise FALSE.
- ex: const index = fruits.includes("cherry");
- **Arraylength**: The length property returns the length (size) of an array:
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
- **Array toString()**: The JavaScript method toString() converts an array to a string of (comma separated) array values.
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
- **Array at()**: The at() method returns an indexed element from an array.

- The at() method returns the same as [].
- ex:  const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
- **join**: The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
- **push**: The push() method adds a new element to an array (at the end):
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
- **pop**: The pop() method returns the value that was "popped out":
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
- **delete**: Using delete() leaves undefined holes in the array.
- Use pop() or shift() instead.
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
### concat:
- The concat() method creates a new array by merging (concatenating) existing arrays:
- ex: const myGirls = ["Cecilie", "Lone"];
      const myBoys = ["Emil", "Tobias", "Linus"];

       const myChildren = myGirls.concat(myBoys);
### copyWithin:
- The copyWithin() method copies array elements to another position in an array:
- ex: Copy to index 2, all elements from index 0:

- const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.copyWithin(2, 0);
  ### Array flat():
  - The flat() method creates a new array with sub-array elements concatenated to a specified depth.
  - ex: const myArr = [[1,2],[3,4],[5,6]];
        const newArr = myArr.flat();
### flatmap():
- The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
- ex: const myArr = [1, 2, 3, 4, 5, 6];
      const newArr = myArr.flatMap(x => [x, x * 10]);
## Array sort methods:
### sort():
- The sort() method sorts an array alphabetically:
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.sort();
### Reversing an array:
- The reverse() method reverses the elements in an array:
- ex: const fruits = ["Banana", "Orange", "Apple", "Mango"];
      fruits.reverse();
### toSoretd():
-  the toSorted() method as a safe way to sort an array without altering the original array.
- ex: const months = ["Jan", "Feb", "Mar", "Apr"];
      const sorted = months.toSorted();

## diffremce between tosort() and sort() is that the first method creates a new array, keeping the original array unchanges, while the last method alters the original array.
### toReversed():
- the toReversed() method as a safe way to reverse an array without altering the original array.
- ex: const months = ["Jan", "Feb", "Mar", "Apr"];
      const reversed = months.toReversed();
## The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
### Numeric sort():
- By default, the sort() function sorts values as strings.
- This works well for strings ("Apple" comes before "Banana").
- If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
- Because of this, the sort() method will produce incorrect result when sorting numbers.
- ex: const points = [40, 100, 1, 5, 25, 10];
      points.sort(function(a, b){return a - b});



