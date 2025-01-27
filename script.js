document.getElementById("yes").addEventListener("click", function() {
    alert("¡Sabía que dirías que sí! 💖");
    document.getElementById("sticker").style.display = "block";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let button = document.getElementById("no");
    let randomX = Math.random() * window.innerWidth - 100;
    let randomY = Math.random() * window.innerHeight - 50;
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});


