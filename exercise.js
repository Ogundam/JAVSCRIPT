let products = [
    {title: "Bag", price: "=N=2000", img: "images/img1.jpeg"},
    {title: "Shoes", price: "=N=1000", img: "images/img2.jpeg"},
    {title: "Phones", price: "=N=5000", img: "images/img3.jpeg"},
]
// products.map((item) => document.write(item.title))


document.querySelector(".firstimg").setAttribute("src", products[0].img)
document.querySelector(".firsttitle").innerText = products[0].title
document.querySelector(".firstprice").innerText = products[0].price

document.querySelector(".secondimg").setAttribute("src", products[1].img)
document.querySelector(".secondtitle").innerText = products[1].title
document.querySelector(".secondprice").innerText = products[1].price

document.querySelector(".thirdimg").setAttribute("src", products[2].img)
document.querySelector(".thirdtitle").innerText = products[2].title
document.querySelector(".thirdprice").innerText = products[2].price


