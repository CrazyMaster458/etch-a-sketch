let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let curretRow = createRowContainer();

    for (let y = 0; y < 16; y++) {
        createSquare(curretRow);
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

    parent.appendChild(square);
}