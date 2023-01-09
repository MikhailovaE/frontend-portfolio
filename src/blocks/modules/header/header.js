/* eslint-disable no-undef */
var header = document.getElementById("header");

var sticky = header.offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
};
