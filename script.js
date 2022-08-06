const changeSizeBtn = document.getElementById("btnChange");
let colorInput = document.getElementById("coloring");
let eraser = document.getElementById("eraser");
const defaultSize = 16;


function changeSize() {
    let newSize = document.getElementById("gridSize").value;
    document.getElementById("container").innerHTML = "";
    makeContainer(newSize);
}

function makeContainer(gridSize) {
    let container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            eraser.checked ? square.style.backgroundColor = "#fff" 
            : square.style.backgroundColor = `${colorInput.value}`
        })
    container.appendChild(square)
    }
}

makeContainer(defaultSize);

changeSizeBtn.addEventListener("click", changeSize);
