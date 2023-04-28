//scrolltrigger
let scrollTopBar = 450;

window.onscroll = function () {

    if (window.scrollY > scrollTopBar || window.pageYOffset > scrollTopBar) {
        document.querySelector('nav').classList.add('white');
        document.querySelector('.nav-btn').classList.add('green');
    }

    else {
        document.querySelector('nav').classList.remove('white');
        document.querySelector('.nav-btn').classList.remove('green');
    }
};



let m = document.querySelectorAll("svg  path")

let animation = setInterval(() => {
    let random = Math.floor(Math.random() * m.length)
    let mSelected = m[random]
    mSelected.style.opacity || mSelected.style.opacity === "0" ? mSelected.style.opacity = 1 : mSelected.style.opacity = 0
}, 150);






