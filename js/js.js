// Burger menu function

const burgerMenu = document.querySelector(".burger-menu");

let burgerAnimate;

burgerAnimate = () => burgerMenu.classList.toggle("change");

burgerMenu.addEventListener("click", burgerAnimate);

// End of burger menu function

