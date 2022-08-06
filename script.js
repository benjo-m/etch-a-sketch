const changeSizeBtn = document.getElementById("btnChange");
let colorInput = document.getElementById("coloring");
const defaultSize = 16;

function makeContainer(gridSize) {
    let container = document.getElementById("container");
    let eraser = document.getElementById("eraser");
    let rainbow = document.getElementById("rainbow");

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            if (eraser.checked) {
                square.style.backgroundColor = "#fff";
            } else {
                if (rainbow.checked) {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    square.style.backgroundColor = `#${randomColor}`;
                } else {
                    square.style.backgroundColor = `${colorInput.value}`
                }
            }
        })
    container.appendChild(square)
    }
}

function changeSize() {
    let newSize = document.getElementById("gridSize").value;
    document.getElementById("container").innerHTML = "";
    makeContainer(newSize);
}

makeContainer(defaultSize);

changeSizeBtn.addEventListener("click", changeSize);
