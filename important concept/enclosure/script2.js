// Lexical Scope defines how variable names are resolved in nested functions

// Therefore, if we have a child function within a parent function
// the child function has access to the scope of the parent function
//  and has access to the global scope

// This is often confused with closure, but lexical scope is only an important part of closure

// global scope
let x = 1;
const parentFunction = () => {
    let myValue = 2;
    console.log("x:",x)
    console.log("value:",myValue)
    // myValue
    // But this does not display closure 
    // although we can say the child function has closure over the scope 
    // of the parent function

    // So in this moment we can only say 
    // it's just lexical scope which is an important part of closure

    // w3schools: "A closure is a function having access to the parent scope,
    // even after the parent function has closed." *This is the key part

    // A closure is created when we define a function, not when a function is executed.

    // In a nutshell, child can access to 3 fields:
    // 1. local scope
    // 2. parent scope (even after the parent function has closed )
    // 3. global scope

    // Try to return the child function and we don't want to call it

    const childFunction = () => {
        console.log("child-x:",x += 5)
        console.log("child-value:",myValue += 1)
    }

    return childFunction
}
let result = parentFunction()

//console.log(result)
result()
result()
parentFunction()
console.log(x)
//console.log(myValue)
// reference error, private variable
