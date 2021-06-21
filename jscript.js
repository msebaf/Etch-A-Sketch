const container = document.querySelector("#mainContainer");
 function  bla(){
    console.log ("loaded");
    for (let i=1; i<=16*16; i++){
        
        const div = document.createElement("div");
        div.style.width = "30px"
        div.style.height = "30px"
        div.style.border = "4px solid black"
        div.style.backgroundColor = "blue"
        container.appendChild(div);
        

    }
}