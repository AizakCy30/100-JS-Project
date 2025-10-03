let blurBtn = document.getElementById("blurBtn")
let offBtn = document.getElementById("offBtn")
let images = document.querySelectorAll(".img")

blurBtn.onclick = function () {
  for (let i = 0; i < images.length; i++)
    images[i].classList.add("blurEffect")
}
offBtn.onclick = function () {
  for (let i = 0; i < images.length; i++)
    images[i].classList.remove("blurEffect")
}
