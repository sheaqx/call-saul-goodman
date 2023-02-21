function getRandomPosition() {
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);
    return [x, y];
  }

  var button = document.getElementById("random-button");
  button.style.display = "none"; // hide the button initially

  setTimeout(function () {
    var pos = getRandomPosition();
    button.style.left = pos[0] + "px";
    button.style.top = pos[1] + "px";
    button.style.display = "block"; // show the button
  }, 2000);