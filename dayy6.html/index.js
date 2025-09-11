// let h1= document.getElementById("one")
// h1[0].style.color="red"
// console.log(h1);
// let a= document.querySelector("a")
// a.setAttribute("herf")
// console.log();
// let h1= document.querySelector("#one")
// h1.innertext
const arr=[
//     'https://tse2.mm.bing.net/th/id/OIP.ZQth0pW1TDrMqLg_JYxK6wHaE7?pid=Api&P=0&h=220'
//     'https://tse4.mm.bing.net/th/id/OIP.wzVMVTk-P358lipWAD9VWQHaEK?pid=Api&P=0&h=220'
//     'https://tse4.mm.bing.net/th/id/OIP.YlGytBduTPd51rDaNQoxzQHaEo?pid=Api&P=0&h=220'
//     'https://tse2.mm.bing.net/th/id/OIP.ePKx3RkuCs9oWgIfFo4rGAHaHa?pid=Api&P=0&h=220'

]
const imageE1 = document.querySelector('img');
let num=0;

setInterval(function(){
    imageE1.setAttribute('src',arr[num]);
    num=(num+1)%arr.length;
},2000);