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

createGrid(16, 16);

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

draw();

const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click", () => {
    let userSize = prompt("Input your board size.", "64")
})