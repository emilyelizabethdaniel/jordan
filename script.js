var button = document.getElementById("button");

button.addEventListener('click', changeColor);

function changeColor() {
    console.log('why am I not changing color');
    button.style.backgroundColor = "red";
};

//changeColor();