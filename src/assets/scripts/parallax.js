const parallaxContainer = document.querySelector('.parallax');
const layers =  parallaxContainer.children;
console.log(layers);

const moveLayers = e => {
const initialX = (window.innerWidth / 2) - e.pageX;
const initialY = (window.innerWidth / 2) - e.pageY;

 console.log(initialX, initialY);
}

window.addEventListener('mousemove', moveLayers)