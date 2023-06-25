let credit = ((num)=>{
    console.log(`initial credit: ${num}`)
    return ()=>{
        num-=1
        console.log(`credit: ${num}`)
    }
})(3)

credit()
credit()
credit()
credit()