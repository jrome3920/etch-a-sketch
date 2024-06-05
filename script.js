const gridContainer = document.getElementById("grid-container");

const gridContainerStyle = [
    "height: 400px;",
    "width: 400px;",
    "display: flex;",
    "flex-direction: column;",
    "justify-content: center;",
    "gap: 2px;"
].join(' ');

gridContainer.style = gridContainerStyle;

gridRowStyle = [
    "display: flex;",
    "justify-content: center;",
    "gap: 2px;",
    "flex-grow: 1;"
].join(' ');

const gridItemStyle = [
    "flex-grow: 1;",
    "border: 1px solid #000;",
    "background-color: #fff;",
    "flex-shrink: 0;",
    "display: flex;",
    "flex-direction: column;"
].join(' ');

function generateGrid(size) {
    //This function removes the current grid created inside the grid-container
    //This is to avoid grid duplications
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    //This creates first row of the grid then inside that grid there is a loop that generates 
    //grid item for each row
    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridRow.style = gridRowStyle;
        gridContainer.appendChild(gridRow);

        for (let col = 0; col < size; col++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style = gridItemStyle;

            //Creates a function that adds background color of the gridItem on hover
            gridItem.addEventListener("mouseover", function () {
                currentBackground = gridItem.style.backgroundColor;
                if (currentBackground === "rgb(255, 255, 255)") {
                    gridItem.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
                } else {
                    //Gets the background-color of the grid and separates all numeric values
                    const backgroundColor = gridItem.style.backgroundColor;
                    const rgbaValues = backgroundColor.match(/[\d.]+/g);
                    let opacity = parseFloat(rgbaValues[3]); // Convert opacity to a number
                    if (opacity < "1") {
                        gridItem.style.backgroundColor = "rgba(0, 0, 0," + (opacity + 0.1) + ")";
                    }
                }
            });
            gridRow.appendChild(gridItem);
        }
    }
}

function showAlert() {
    let gridSize = prompt("Specify the number of squares.");
    if (isNaN(gridSize)) {

    } else {

    }
    generateGrid(gridSize);
}

generateGrid(16);

