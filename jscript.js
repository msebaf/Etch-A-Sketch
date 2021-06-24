

const mainMaincontainer = document.querySelector("#mainMainContainer")
const container = document.querySelector("#mainContainer");
 container.style.display = "flex"
 
const clearButon = document.querySelector("#clear").addEventListener("click", function(e){
    makeBlueAgain();
})
 
const newGridButton = document.querySelector("#newGrid").addEventListener("click", function(e){

newGrid()})
 
 
 function  fillGrid(nombreLinea, b){
    if (!b){
        b=16
    }

    for (let i=1; i<=b; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "squareBlue");
        div.addEventListener("mouseover", function(e){
        div.setAttribute("class", "squareRed")
        })
        
        nombreLinea.appendChild(div);
        
    }
    
}

function createGrid(a, b) {
   if (!a){
       a=16;
       
       
   } 
   
    for (let i=1; i<=a; i++){
        const newLine= document.createElement("div");
        newLine.setAttribute("id", "line")
        container.appendChild(newLine)
        fillGrid(newLine, b);
      
    }
    
}

function makeBlueAgain(){
    const reded = container.querySelectorAll(".squareRed")
    console.log(reded)
    console.log(reded.length)
    for (let index = 0; index < reded.length; index++) {
        const element = reded[index];
        element.setAttribute("class", "squareBlue")
    }
}

function newGrid(){
    
        const lines = container.querySelectorAll("#line")
            for (let index = 0; index < lines.length; index++) {
            container.removeChild(lines[index])
            
    }
    createGrid(prompt("horizontal?"), prompt("vertical?"))
    
    
    
    }    
    



    






