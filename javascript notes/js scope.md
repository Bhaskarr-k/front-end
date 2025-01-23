# scope in java script?
- scope determines the accessbility of variables.
- it is divided into 3 types 
-        block scope
         function scope
         global scope
## Block scope:
- Before Es6 javascript variables had only **Global scope and Function scope**.
- Es6 introduced teo importent javascript keywords that are **let and const**.
- these two keywords provide **Block scope** in javascript.
- variables declares inside a {} block cannot be accessed from outside the block.
- ex:  {
    let x=2;
}
- variables declared with the **var** keyword cannot have block scope.
- varuiables declared inside a {} block can be accessed from outside block.
- ex: {
    var x=2;
}
## local scope:
- variables declared within a javascript function are **local** to the function.'
- ex: function myfunction(){
    let carname="volvo"

}
- local variables have **function scope**
- they can only be accessed from with in the function.
- since local vraibles are only recognized inside their functions , variables with the same name can be use in diffrent functions.
- loacal variables are created when a function starts, and deleted when the function is completed.
## function scope:
- javascript has function scope: each function creates a new scope.
- varaibels deifned inside a function ar enot accessible (visible) from outside the function.
- variables delcared with **var,let** and **const** are quite similar when declared inside a function.
- they all have function scope.
- ex: function myfunction(){
    var carName="volvo";
} 
- ex: function my function(){
    let carName="toyota";
} 
- ex: function myfunction(){
    const carName="volvo";
}