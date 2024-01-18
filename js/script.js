document.addEventListener("DOMContentLoaded"), function () {
    const submitFormArea = document.getElementById("calculateArea");
    const submitFormPerimeter = document.getElementById("calculatePerimeter");

    const resetArea = document.getElementById("resetArea");
    const resetPerimeter = document.getElementById("resetPerimeter");

    submitFormArea.addEventListener("submit", function (Event) {
        Event.preventDefault();
        countArea();
    });

    submitFormPerimeter.addEventListener("submit", function (Event) {
        Event.preventDefault();
        countPerimeter();
    });

    resetArea.addEventListener("click", function (Event) {
        Event.preventDefault();
        resetArea();
    });

    resetPerimeter.addEventListener("click", function (Event) {
        Event.preventDefault();
        resetPerimeter();
    });

}

const containerArea = document.getElementById("resultCalculatorArea");
const containerPerimeter = document.getElementById("resultCalculatorPerimeter");

function counting() {
    containerArea.innerHTML = "";

    let squareSide = parseFloat(document.getElementById("Nilai sisi").value);

    let area = squareSide * squareSide;

    heading = document.createElement("h4");
    heading.innerHTML = "Hasil";

    info = document.createElement("input");
    info.value = 'L = ${squareSide} x ${squareSide}';
    info.setAttribute("readonly", "true");

    desc = document.createElement("p");
    desc.innerText = 'Maka luas dari persegi tersebut adalah ${area}';

    containerArea.append(heading, info, result, desc);
}

