let p1= new Promise((res,rej)=>{
    res()
})
let p2= new Promise((res,rej)=>{
    res()
})
let p3= new Promise((res,rej)=>{
    res()

})
Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})