window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknapluk").addEventListener("click", toggleMenuOff);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector(".sectionwrapper").classList.toggle("hidden");
}

function toggleMenuOff() {
    console.log("toggleMenuOff");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("header").classList.toggle("hidden");
    document.querySelector(".sectionwrapper").classList.toggle("hidden");

}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", taendOgSluk);
}


function taendOgSluk() {
    console.log('taendOgSluk');
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
