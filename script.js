const container = document.querySelector("#container");



function createBoxes(amount) {
    for (var y = 0; y < amount; y++) {
        for (var i = 0; i < amount; i++) {
            divBox = document.createElement("div");
            divBox.classList.add("box");
            container.appendChild(divBox);
        }
        divDivider = document.createElement("div");
        // divDivider.classList.add("box");
        divDivider.classList.add("clear");
        container.appendChild(divDivider);
    }

}

createBoxes(16);

boxes = container.querySelectorAll('.box');

boxes.forEach(c => {
    c.addEventListener('mouseenter', handleMouseEnter);
})

function handleMouseEnter(e) {
    e.target.style.backgroundColor = "blue";
}
