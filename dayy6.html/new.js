let formE1=document.querySelector("form")
formE1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data={
        name:formE1[0].value,
        email:formE1[1].value,
        pass:formE1[2].value

    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))
})
formE2.addEventListener("submit",(e)=>{
    let loginobj={
        email:formE2[0].value,
        pass:formE2[1].value
    }
    if(dataObj.email==loginobj
        .email && dataObj.pass==loginobj.pass){
            prompt("login done")
        }else{
            prompt("error")
        }
})