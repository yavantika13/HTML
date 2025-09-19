 let canvas= document.querySelector('canvas')
 let pen = canvas.getContext("2d")
// pen.fillRect(50,150,50,50)
// pen.clearRect(50,140,50,50)
let snakeCells=[[0,0]]
let cell=50
let direction="right"
let gameover=false
document.addEventListener("keydown",(e)=>{
if(e.key=='ArrowUp'){
        direction='up'
    }else if(e.key=='ArrowDown'){
        direction='down'
    }
    else if (e.key=='ArrowLeft'){
        direction='left'
    }else {
        direction='right'
    }
 })
function draw(){
    
    for(let i of snakeCells){
        pen.clearRect(0,0,1100,500)
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    }
    
}

function update(){
   let headX= snakeCells[snakeCells.length-1][0]
    let headY= snakeCells[snakeCells.length-1][1]
    let newX= headX+cell
    let newY= headY

    snakeCells.push([newX,newY])
    snakeCells.shift()
}
setInterval(()=>{
    draw()
    update()
})