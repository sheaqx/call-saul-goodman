console.log("Hi, I'm Saul Goodman. Did you know that you have rights? The constitution says you do! And so do I.");

document.getElementById('play-button').addEventListener('click', playVideo);

function playVideo() {
   
    var videoElement = document.createElement('video');
    videoElement.src = 'src/images/saul-commercial.mp4';
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.preload = 'auto';
    document.body.appendChild(videoElement);

    var overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'block';
    
    videoElement.addEventListener('ended', function() {
        window.location.href = 'http://bettercallsaul.amc.com/';
      });
  }  

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