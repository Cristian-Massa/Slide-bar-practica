// button on/off slide bar
let toggleSlide = document.querySelector("#btn")
toggleSlide.addEventListener("click", functionToggleSlide)

// bar
const slideBarToggler = document.querySelector("#slide")

// bar function toggler
function functionToggleSlide (){
    slideBarToggler.classList.toggle("toggleSlide")
    slideBarToggler.classList.toggle("offSlide")

}

