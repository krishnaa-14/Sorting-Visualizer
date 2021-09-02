
function updateArray(currDiv, size, color) {

    currDiv.style.backgroundColor = color;
    currDiv.style.margin = "0% 0.3%";
    currDiv.style.width = "5%";
    currDiv.style.height = size + "%";
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}