const grid = document.getElementById("grid");
const gridSize = document.getElementById("gridSizeSlider");
const sliderLabel = document.getElementById("gridSizeLabel");
const canvasSize = 540;
/* BUTTONS */
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;

gridSize.addEventListener("input", changeGrid);
clearBtn.addEventListener("click", function() {
    clearChildren(grid);
    makeGrid(gridSize.value)
});

function changeGrid(e) {
    updateSliderLabel(e.target.value);
    clearChildren(grid);
    makeGrid(e.target.value);
}

function updateSliderLabel(size) {
    sliderLabel.innerHTML = size + " x " + size;
}


function makeGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.style.width = canvasSize / gridSize + "px";
        newSquare.style.height = canvasSize / gridSize + "px";
        addEventListener("mouseover", hover);
        grid.appendChild(newSquare);
    }
}

function clearChildren(parent) {
    console.log("cleasr");
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}

addEventListener("mousedown", draw);
addEventListener("mouseup", turnOffDrawing);

function hover(e) {
    if (isDrawing) {
        e.target.style.backgroundColor = "black";
    }
}

function draw() {
    isDrawing = true;
}

function turnOffDrawing() {
    isDrawing = false;
}

function main() {
    makeGrid(gridSize.value);
}


main();