
const container = document.querySelector("#mainContainer");
 container.style.display = "inline-flex"
 
 
 
 function  fillGrid(nombreLinea){
  

    for (let i=1; i<=16; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        div.addEventListener("mouseover", function(e){
            div.style.backgroundColor = "red";
        })
        div.style.width = "30px"
        div.style.height = "30px"
        div.style.border = "4px solid black"
        div.style.backgroundColor = "blue"
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





    






