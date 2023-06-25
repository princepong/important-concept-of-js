let sum = (...args) =>{
    return [...args].reduce((acc,cur) => acc+cur, 0)
}

const callCounter = (fn) =>{
    let counter = 0
    return (...args) =>{
        console.log(...args)
        console.log(`Function called ${++counter} times`)
        return fn(...args)
    }
}

sum = callCounter(sum)

console.log(sum(1,2,3,4,5,6,7,8,9,10)) 
console.log(sum(1,2,3,4)) 
