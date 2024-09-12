let container = document.querySelector(".container");

let gridSize = 16;

generateSquares();

function generateSquares() {
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        let curretRow = createRowContainer();
    
        for (let y = 0; y < gridSize; y++) {
            createSquare(curretRow);
        }
    }
}

function getUserInput() {
    let userInput = prompt("Enter grid size (max: 100)")

    gridSize = parseInt(userInput);

    if (gridSize < 0 || gridSize > 100) {
        gridSize = 16;
        alert("Wrong grid size.");
    } else if(userInput === null) {
        alert("No input provided.");
    } else {
        generateSquares();
    }
}

function createRowContainer() {
    let rowContainer = document.createElement("div");

    rowContainer.className = "row-container";

    container.appendChild(rowContainer);

    return rowContainer;
}

function createSquare(parent) {
    let square = document.createElement("div");

    square.className = "square";

    square.addEventListener("mouseover", function() {
        square.classList.add("red");
    })

    parent.appendChild(square);
}