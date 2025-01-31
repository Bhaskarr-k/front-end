# immediately invoked function Expression(IIFE):
- An immediately invoked function Expression is a code pattren that directly calls a function defined as as expression.
- (function () {

  // Do something

})();

- const value = (function () {

  // Do something

  return someValue;

})();

- instead of saving the function ina avariable , the function is immediatley invoked.
- this is almost equivalent to just writing the function body but there are few unique benifetes.
