# Error handling?
- error handling in javascript is essentila fir writing robust and mainatable applications .
- javascript provides multiple ways to handle errors , including **try , catch** and **throw** and error handling. 
- below are the key concepts and best practics for error handling in javascirpt.
### types of errors in javascript:
- javascript errors canbe categorized into several types.
-**syntax errors**: occurs when there is a mistake in the code structure.
- **reference errors**: happens when a variable is use to before it is declared.
- **type errors**: occurs when an operation is performed on  avalue of an unexpected type.
- **range errors**: occcurs when an invalid URL encoding/decoding is used.
## handling erros using **try and catch**:
- the **try and catch** block is used to handle runtime errors and prevent program crashes.
- **example**:
try {

    // Code that may throw an error

    let result = someUndefinedVariable + 5;

} catch (error) {

    console.log("An error occurred:", error.message);
}
### handling specific errors:
try {

    let json = '{"age": 30}'; // Missing "name"

    property

    let user = JSON.parse(json);

    if (!user.name) {

        throw new Error("Incomplete data: missing 

        'name'");
    }
} catch (error) {

    console.error("JSON Error:", error.message);
}
### throwing custom errors:
function divide(a, b) {

    if (b === 0) {

        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {

    console.log(divide(10, 0));

} catch (error) {

    console.error("Error:", error.message);
}
### the **finally** block:
- the **finally** block runs code regradless of whether an error occur or not.
try {

    console.log("Trying to execute code...");

    throw new Error("Something went wrong!");

} catch (error) {

    console.error("Caught an error:", error.message);
    
} finally {

    console.log("This will always run.");
}









