let togglebtn = document.querySelector("#togglebtn");
let menu = document.querySelector(".menu");
let moon = document.querySelector(".moon");
let body = document.querySelector("body");
let nav = document.querySelector(".navbar");
let para = document.querySelectorAll("h1")

togglebtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});



moon.addEventListener("click", function (event) {
    event.stopPropagation();

    body.style.backgroundColor = "black";
    for (paras of para) {
        paras.style.color = "white";

    }

});


nav.addEventListener("click", function (event) {
    event.stopPropagation();


});

moon.addEventListener("dblclick", function (event) {
    event.stopPropagation();

    body.style.backgroundColor = "white";

    body.style.backgroundColor = "white";
    for (paras of para) {
        paras.style.color = "black";

    }
});
