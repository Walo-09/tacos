document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("reactionGif").style.display = "block"; // Muestra el nuevo GIF
});

document.getElementById("no").addEventListener("mouseover", function() {
    let buttonYes = document.getElementById("yes");
    let currentSize = window.getComputedStyle(buttonYes).getPropertyValue("font-size");
    let newSize = parseFloat(currentSize) + 5 + "px";
    buttonYes.style.fontSize = newSize;
});

