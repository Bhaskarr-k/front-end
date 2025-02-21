# what is async in javascript?
- declares a function that always retuns a **promise**
- allows the use of **await** inside it
- **example**:

async function fetcDta() {

    return "hello, async";

}

fetchData().then(console.log);


# what is await in javascript?
- can only be use in inside an **async** function.
- pauses execution until the **promise** is resolved.

async function getNumber() {

    let promise = new promise((resolve) = > {

        settimeout( () => resolve(40), 2000)
    });

    let result = await promise;

    conole.log(result)
}

getNumber();