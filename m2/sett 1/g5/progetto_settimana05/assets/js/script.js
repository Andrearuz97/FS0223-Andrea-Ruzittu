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



/*let m = document.querySelectorAll("svg  path")

let animation = setInterval(() => {
    let random = Math.floor(Math.random() * m.length)
    let mSelected = m[random]
    mSelected.style.opacity || mSelected.style.opacity === "0" ? mSelected.style.opacity = 1 : mSelected.style.opacity = 0
}, 100);*/

let m = document.querySelectorAll("svg  path")

let counter = 0;
let animation = setInterval(() => {
    let random = Math.floor(Math.random() * m.length)
    let mSelected = m[random]
    mSelected.style.opacity || mSelected.style.opacity === 0 ? mSelected.style.opacity = 1 : mSelected.style.opacity = 0
    counter++;
    if (counter > 10000) {  // Cancella l'intervallo dopo 2000 cicli (circa 100 secondi) 
        clearInterval(animation);
    }
}, 50);









