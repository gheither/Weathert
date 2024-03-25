function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  var div = document.getElementById("color-changing-div");
  div.style.backgroundColor = getRandomColor();
}

setInterval(changeBackgroundColor, 3000);
