console.log("Hi, I'm Saul Goodman. Did you know that you have rights? The constitution says you do! And so do I.");

function playAudio() {
    var audio = document.getElementById("saul-audio");
    audio.play();
    audio.addEventListener('ended', hideImage);
}

function displayImage() {
    var image = document.getElementById("saul-gif");
    image.style.display = "block";
}

function hideImage() {
    var image = document.getElementById("saul-gif");
    image.style.display = "none";
}