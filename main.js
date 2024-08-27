
const cartButton = document.getElementById('cartButton');
const closeCartButton = document.getElementById('closeCartButton');
const cartOffcanvas = document.getElementById('cartOffcanvas');

cartButton.addEventListener('click', () => {
    cartOffcanvas.classList.toggle('translate-x-full');
});

closeCartButton.addEventListener('click', () => {
    cartOffcanvas.classList.toggle('translate-x-full');
});

// cart nuber counter

let cartN = document.getElementById("cartn")
let cart = 0

function zflip(){
    cart += 1
    cartN.innerHTML = cart
}