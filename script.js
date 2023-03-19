const grid = document.querySelector("#grid");

function createGrid() {
    for (let i = 0; i < 32; i++) {
        square = document.createElement("div");
        grid.appendChild(square);    
    }
}

createGrid();