let colorChangeButton = document.getElementById("color-changer-btn")

function getRandomValue() {
  return Math.floor(Math.random() * 256)
}
function generateRandomRGBColor() {
  return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`
}
function applyRandomBackgroundColor() {
  document.body.style.backgroundColor = generateRandomRGBColor();
}
colorChangeButton.addEventListener("click", applyRandomBackgroundColor);
