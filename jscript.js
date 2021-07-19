const clearButton = document.querySelector("#restartGrid").addEventListener("click", function(e){
    clearGrid()
});

const customButton = document.querySelector("#customizeGrid").addEventListener("click", function(e){
    createCustomGrid()
});

const gridContainer = document.querySelector("#gridContainer");

function createGrid(lines, rows){

    if (!lines) {
        lines=16;
        
    }
    else if (lines>100 ){
        lines = 100;

    }
    
    for (let i = 0; i < lines; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        gridContainer.appendChild(newRow);
       fillRow(newRow, rows)
        
    }
}


function fillRow(newRow, rows){
   
    if (!rows) {
        rows=16;
        
    }
    else if (rows>100 ){
        rows = 100;

    }
    for (let i = 0; i < rows; i++) {
        
        const newSquare = document.createElement("div");
        newSquare.setAttribute("class", "newSquare");
        newSquare.addEventListener("mouseover", function(e){
            newSquare.setAttribute("class", "newSquareHovered")
        })
        newRow.appendChild(newSquare);
        
        
        
    }

} 

function clearGrid(){

const redSquares= document.querySelectorAll(".newSquareHovered");
for (let index = 0; index < redSquares.length; index++) {
    const element = redSquares[index];
    element.setAttribute("class", "newSquare")
}
}

function createCustomGrid(){

const delet = document.querySelectorAll(".row")
for (let i = 0; i < delet.length; i++) {
    gridContainer.removeChild(delet[i])
    
}
createGrid(prompt("vertical? (Max 100)"), prompt("horizontal? (Max 100)"))

}


    






