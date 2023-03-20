const grid = document.querySelector("#grid");
const squares = grid.childNodes;
const changeSizeButton = document.querySelector("#change-size")

let color = "black";
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
    e.target.style["background-color"] = color;
}

function getNumber() {
    input = +prompt("Choose a number of squares per side up to 100:", 16)
    console.log(input);

    if (input > 0 && input < 100) {
        return input;
    } else if (input === 0) {
        return 16;
    } else {
        alert("Wrong input. Try Again.");
    }
}

function changeSize() {
    let number;

    while (!number) {
        number = getNumber();
    }

    removeGrid();
    createGrid(number);
}

createGrid(numberOfSquares);

changeSizeButton.addEventListener("click", changeSize);
