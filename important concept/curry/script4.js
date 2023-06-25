// Requires a function with a fixed number of parameters
const curry = (fn) => {
  console.log(fn.length); // 3
  return (curried = (...args) => {
    console.log("args: ", args.length);
    console.log("fn: ", fn.length);
    console.log(...args);
    if (fn.length !== args.length) {
      return curried.bind(null, ...args);
    }
    return fn(...args);
  });
};
const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10, 20,30));
