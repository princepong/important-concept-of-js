const multiply = (x,y)=> x*y;

const curriedMultiply = x => y => x*y;

console.log(multiply(2,3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

// Partically applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen)
console.log(timesTen(5));
console.log(timesTen(4));

// Another example
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content
const updateHeaderText = updateElemText('header');
updateHeaderText('Welcome to the Currying Demo');
