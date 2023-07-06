// mobile menu  //
menuBar = document.getElementById('burger-bar')
menuBar.addEventListener('click', function(){
document.getElementById("burger-bar").classList.toggle("change")
document.getElementById("nav").classList.toggle("change")
})
const links = document.querySelectorAll('.nav li a')
links.forEach(function(link) {
link.addEventListener('click', function(){
document.getElementById('nav').classList.remove ('change')
document.getElementById('burger-bar').classList.remove ('change')
})
})

// controls desktop nav bar //
let prevScrollpos = window.scrollY
window.onscroll = function() {
let currentScrollPos = window.scrollY
if (prevScrollpos > currentScrollPos) {
document.getElementById("desktop-menu").style.top = "0"
} else {
document.getElementById("desktop-menu").style.top = "-7.75em"
}
prevScrollpos = currentScrollPos
}

// section scroll animation //
function reveal() {
const reveals = document.querySelectorAll(".body-section");

for (let i = 0; i < reveals.length; i++) {
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}
window.addEventListener("scroll", reveal);


// keeps year current //
let date = (new Date()).getFullYear()
document.getElementById('year').innerHTML = date
