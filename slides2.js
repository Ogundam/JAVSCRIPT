let allimages = document.querySelectorAll(".slides img")
let slide = document.querySelector("anime")


let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")


let currentIndex = 0

function showImage() {
    for(let image of allimages) {
        image.style.display = "none"
    }

    allimages[currentIndex].style.display = "block"
    allimages[currentIndex].classList.add("anime")
}

showImage()

// slide forward
nextBtn.onclick = function(){
    currentIndex = (currentIndex + 1) % allimages.length
    showImage()
}

prevBtn.onclick = function(){
    currentIndex = (currentIndex - 1 + allimages.length) % allimages.length
    showImage()
}
// auto move
setInterval(() => {
    currentIndex = (currentIndex + 1) % allimages.length
    showImage()
}, 3000);

