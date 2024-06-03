const gridContainer = document.getElementById("grid-container");

const gridContainerStyle = [
    "display: flex;",
    "height: 100%;",
    "flex-direction: column;",
    "justify-content: center;",
    "gap: 2px;"
].join(' ');

gridContainer.style = gridContainerStyle;

gridRowStyle = [
    "display: flex;",
    "justify-content: center;",
    "gap: 2px;"
].join(' ');

const gridItemStyle = [
    "height: 36px;",
    "width: 36px;",
    "border: 1px solid #000;",
    "background-color: #fff;",
    "flex-shrink: 0;",
    "display: flex;",
    "flex-direction: column;"
].join(' ');

for (let row = 0; row < 16; row++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridRow.style = gridRowStyle;
    gridContainer.appendChild(gridRow);

    for (let col = 0; col < 16; col++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style = gridItemStyle;

        gridItem.addEventListener("mouseover", function () {
            gridItem.style.backgroundColor = "#000";
        });

        gridRow.appendChild(gridItem);
    }
}

