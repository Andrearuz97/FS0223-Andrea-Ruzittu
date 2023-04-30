let scrollTopBar = 450;

window.onscroll = function () {
  if (window.scrollY > scrollTopBar || window.pageYOffset > scrollTopBar) {
    document.querySelector("nav").classList.add("white");
    document.querySelector(".nav-btn").classList.add("green");
  } else {
    document.querySelector("nav").classList.remove("white");
    document.querySelector(".nav-btn").classList.remove("green");
  }
};

let m = document.querySelectorAll("svg path");
let keyframes = [
  { opacity: 0, offset: 0 },
  { opacity: 0, offset: 0 },
  { opacity: 0, offset: 1 },
];

function animate() {
  let random = Math.floor(Math.random() * m.length);
  let mSelected = m[random];

  if (mSelected) {
    mSelected.animate(keyframes, { duration: 2000 });
  }

  setTimeout(animate, 100);
}

animate();
