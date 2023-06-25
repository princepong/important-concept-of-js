// check for valid data and number of params

let rectangleArea = (length, width)=>{
    return length * width;
}


const countParams = (fn) =>{
    console.log(fn)
    return (...params)=>{ 
        if (params.length !== fn.length){
            throw new Error(`Incorrect number of parameters for ${fn.name}`); // can print the fn.name
        }
        return fn(...params)
    }
}

const requireIntegers = (fn) =>{
    console.log(fn)
    return (...params)=>{
        params.forEach(param=>{
            if (!Number.isInteger(param)){
                throw new TypeError(`Params must be intergers`)// can not print fn.name
            }
        })
        return fn(...params)
    }
}

rectangleArea = countParams(rectangleArea)
rectangleArea = requireIntegers(rectangleArea)
console.log(rectangleArea(2,3))
