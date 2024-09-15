let images = document.querySelectorAll("img")


let currentIndex = 0;

function showImage(){
    images.forEach((eachImg) =>{
        eachImg.style.display = "none"
    } )

    images[currentIndex].style.display = "block"
}

showImage()

function next(){
    currentIndex = (currentIndex + 1) % images.length
    showImage()
}

function prev(){
    currentIndex = (currentIndex - 1 + images.length) % images.length
    showImage()
}

// setInterval(next, 3000)

// console.log(y);



// console.log(a.toFixed(110));

// console.log(a.tofixed(110));

// try{
//     Math.tan()
// }catch(error){
//     console.log(error);
// }

// console.log("hello");

// try{
//     if(fn == ""){
//         throw new Error("Firstname cannotbe empty")
//     }
//     else if(ln == ""){
//         throw new Error("Secondname cannot be empty")
//     }
//     }catch(error){
//         console.log(error);
//     }
    
//     console.log("hello");
    
    