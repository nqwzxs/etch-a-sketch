const grid = document.querySelector("#grid");
const squares = grid.childNodes;
const changeSizeButton = document.querySelector("#change-size")

let numberOfSquares = 16;

function createGrid(numberOfSquares) {
    grid.style["grid-template-columns"] = `repeat(${numberOfSquares}, 1fr)`;
    grid.style["grid-template-rows"] = `repeat(${numberOfSquares}, 1fr)`;
    
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        square = document.createElement("div");
        square.addEventListener("mouseover", changeColor);
        grid.appendChild(square);    
    }
}

function removeGrid() {
    grid.innerHTML = ''
}

function changeColor(e) {
    e.target.classList.add("colored");
}

function changeSize() {
    numberOfSquares = +prompt("Choose a number of squares per side up to 100:", 16)
    removeGrid();
    createGrid(numberOfSquares);
}

createGrid(numberOfSquares);

changeSizeButton.addEventListener("click", changeSize);
