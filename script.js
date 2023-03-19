const grid = document.querySelector("#grid");
let squares = grid.childNodes;

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        square = document.createElement("div");
        grid.appendChild(square);    
    }
}

function changeColor(e) {
    e.target.classList.add("colored");
}

createGrid();

squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
});
