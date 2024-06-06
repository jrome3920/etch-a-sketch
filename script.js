const gridContainer = document.getElementById("grid-container");
let currentGrid = 16;

function getCurrentSize() {
    document.getElementById("current-size").innerHTML = "Current grid size: " + currentGrid;
}


const gridContainerStyle = [
    "display: flex;",
    "flex-direction: column;",
    "justify-content: center;",
    "gap: 1px;"
].join(' ');

gridContainer.style = gridContainerStyle;

gridRowStyle = [
    "display: flex;",
    "justify-content: center;",
    "gap: 1px;",
    "flex-grow: 1;"
].join(' ');

const gridItemStyle = [
    "flex-grow: 1;",
    "border: 1px solid #000;",
    "border-radius: 4px;",
    "background-color: #fff;",
    "flex-shrink: 0;",
    "display: flex;",
    "flex-direction: column;"
].join(' ');

function generateRandomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    var color = "rgb(" + red + ", " + green + ", " + blue + ", 0.1)";
    return color;
}

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
                    const color = generateRandomRGB();
                    gridItem.style.backgroundColor = color;
                    console.log(color);
                } else {
                    //Gets the background-color of the grid and separates all numeric values
                    const backgroundColor = gridItem.style.backgroundColor;
                    const rgbaValues = backgroundColor.match(/[\d.]+/g);
                    let opacity = parseFloat(rgbaValues[3]); // Convert opacity to a number
                    if (opacity < "1") {
                        opacity += 0.1;
                        // Apply the new RGBA color with increased opacity
                        gridItem.style.backgroundColor = `rgba(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]}, ${opacity})`;
                    }
                }
            });
            gridRow.appendChild(gridItem);
        }
    }
}

//Check if the input value is valid 
function validateValue(input) {
    const value = parseFloat(input);
    return !(isNaN(value) || value === 0 || value > 100);
}

//Gets the user's inputed grid value
function submitGridValue() {
    const alert = document.getElementById('error-alert');
    const gridInput = document.getElementById("grid-size").value;
    if (validateValue(gridInput)) {
        currentGrid = gridInput;
        generateGrid(gridInput);
        alert.innerHTML = "";
        getCurrentSize();
    } else {
        alert.innerHTML = "Invalid input. Please try again!";
    }
}


//Reset Grid
function shake() {
    gridContainer.classList.add("shake")
    setTimeout(function () {
        gridContainer.classList.remove("shake");
    }, 500);
    generateGrid(currentGrid);
}

generateGrid(currentGrid);
getCurrentSize();

