document.querySelector("input")
let inp=document.querySelector("input")
let button  =document.querySelectorAll('button')
//console.log(button);
for(let btn of button){
    btn.addEventListener("click",()=>{
        let txt = btn.innerText
        if(txt=="C"){
            inp.value=""
        }else if(txt=="="){
          inp.value=  eval(inp.value)
        }
        else{
            inp.value= inp.value+txt
        }
    })
}