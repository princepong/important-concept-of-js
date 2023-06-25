// Another common use of currying is function composition
// Allows calling small functions in a specific order

// const addCustomer = fn => (...args)=>{
//    // console.log("fn: ",fn)
//     console.log('saving customer info...')
//     return fn(...args);
// }

// const processOrder = fn => (...args)=>{
//  //   console.log("fn: ",fn)
//     console.log(`processing order #${args[0]}`)
//     return fn(...args)
// }

// let completeOrder = (...args)=>{
//     console.log(`Order #${[...args].toString()} completed.`)
// }

// completeOrder = (processOrder(completeOrder))
// //console.log(completeOrder)
// completeOrder = (addCustomer(completeOrder))
// completeOrder("1000")

// what if the function write it more specific way 
function addCustomer(...args){
    console.log('saving customer info...')
    return function processOrder(...args){
        console.log(`processing order #${args[0]}`)
        return function completeOrder(...args){
            // end
            console.log(`Order #${[...args].toString()} completed.`)
        }
    }
}

addCustomer("1000")("1000")("1000")
