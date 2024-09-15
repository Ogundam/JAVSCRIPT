let colors = ["red", "blue", "green", "orange", "pink", "purple"];

let images = [
    "./images/img1.jpeg",
    "./images/img2.jpeg",
    "./images/img3.jpeg",
    "./images/img4.jpeg",
    "./images/img5.jpeg",
    "./images/img6.jpeg",
];

console.log(colors[0]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(images[2]);

let a = Math.round(Math.random()* 5 )

console.log(colors[a]);



setInterval(function()
{   let a = Math.round(Math.random()* 5 )
    console.log(colors[a]);
    document.querySelector("div").style.backgroundcolor = colors[a]
}, 1000);

setInterval(function()
{   let rn = Math.random() * 5
    let a = Math.round(rn)
    document.querySelector("div").style.backgroundImage = `url(${images[a]})`
}, 1000);


// // setInterval(function (){
//     let g = Math.round(Math.random() * 1000)
//     document.write(g);

// // }, 2000);

// let f = Math.random() * 5000
// let e = Math.round(f)
// console.log(e)
// document.write(e);

//  setInterval(function(){
//     let f = Math.random() * 5000
// let e = Math.round(f)
// console.log(e)
// document.write(e)
// }, 3000);