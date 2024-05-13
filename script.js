const container = document.querySelector(".container");
let isDrawing = false;

function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            container.appendChild(cell);
        }
    }
}

function draw() {
    const cells = container.querySelectorAll(".grid-cell");

    container.addEventListener("mousedown", event => {
        if (event.target.classList.contains("grid-cell")) {
            event.target.style.backgroundColor = "black";
            isDrawing = true;
        }
    });

    container.addEventListener("mouseup", () => {
        isDrawing = false;
    });

    container.addEventListener("mousemove", event => {
        if (isDrawing && event.target.classList.contains("grid-cell")) {
            event.target.style.backgroundColor = "black";
        }
    });
}

function updateGridSize (size) {
    container.innerHTML = "";
    createGrid(size, size)
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

createGrid(16, 16);
draw();

const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", () => {
    let userSize = prompt("Input your board size.", "64");
    if (userSize && !isNaN(userSize) && parseInt(userSize) > 0) {
        updateGridSize(parseInt(userSize));
    } else {
        alert("Invalid input. Please enter a positive number.");
    }
});


