function moveImage() {
    var image = document.getElementById("randomImage");
    var maxX = window.innerWidth - image.width;
    var maxY = window.innerHeight - image.height;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
} 