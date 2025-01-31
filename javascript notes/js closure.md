# closures:
- A closure is any piece of source code that refers to some variables, and the closure remembers these variables even when the scope in which these variables were declred has exited.
- A parent scope that defines some variables or functions. it should have a clear lifetime which means it should finish execution st some point.this includes blocks and functions and modules and more.
- An inner scope defined within the parent scope which refers to some variables functions defined in the parent scope.
- // The outer function defines a variable called "name"

- const pet = function (name) {

  const getName = function () {

    // The inner function has access to the "name" variable of the outer function

    return name;

  };

  return getName; // Return the inner function, thereby exposing it to outer scopes

};

const myPet = pet("Vivie");


console.log(myPet()); // "Vivie"