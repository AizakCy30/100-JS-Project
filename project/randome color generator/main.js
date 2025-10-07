let colorChangeButton = document.querySelector(".btn-primary")

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
