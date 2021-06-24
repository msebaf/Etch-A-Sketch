

const mainMaincontainer = document.querySelector("#mainMainContainer")
const container = document.querySelector("#mainContainer");
 container.style.display = "flex"
 
const clearButon = document.querySelector("#clear").addEventListener("click", function(e){
    makeBlueAgain();
})
 
 
 
 function  fillGrid(nombreLinea){
  

    for (let i=1; i<=16; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "squareBlue");
        div.addEventListener("mouseover", function(e){
        div.setAttribute("class", "squareRed")
        })
        
        nombreLinea.appendChild(div);
        
    }
    
}

function createGrid() {
    

   
    for (let i=1; i<=16; i++){
        const newLine= document.createElement("div");
        container.appendChild(newLine)
        fillGrid(newLine);
      
    }
    
}

function makeBlueAgain(){
    const reded = container.querySelectorAll(".squareRed")
        for (let index = 0; index < reded.length; index++) {
        const element = reded[index];
        element.setAttribute("class", "squareBlue")
    }
}



    






