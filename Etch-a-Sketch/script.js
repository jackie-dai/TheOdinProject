const grid = document.getElementById("grid");
const gridSize = document.getElementById("gridSizeSlider");
const sliderLabel = document.getElementById("gridSizeLabel");

gridSize.addEventListener("input", updateSliderLabel);

function updateSliderLabel(e) {
    sliderLabel.innerHTML = e.target.value + " x " + e.target.value;
    console.log(960 / e.target.value)
}



function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let newSquare = document.createElement("div");
        newSquare.className = "square";
        newSquare.width = 960/gridSize
        newSquare.height = 960/gridSize
        grid.appendChild(newSquare);
    }
}

function clearChildren(parent) {
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}

function main() {
    makeGrid();
}

console.log("sadfads");
main();