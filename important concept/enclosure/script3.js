// IIFE (Imediately Invoked Function Expression)
const privateCounter = (()=>{
    let counter = 0;
    console.log(`initial value: ${counter}`)
    return ()=>{
        counter+=1;
        console.log(counter)}
})()

privateCounter()
privateCounter()