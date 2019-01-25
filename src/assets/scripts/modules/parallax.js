const parallaxCont = document.querySelector('.parallax');
const layers = Array.from(parallaxCont.children);
 console.log(  parallaxCont.children )  
const moveLayers = e => {
const initialX = (window.innerWidth / 2) - e.pageX;
const initialY = (window.innerHeight / 2) - e.pageY;
 console.log(  initialX, initialY )
  layers.forEach((layer, i) => {
      layer.style.transform = 'translate(${initialX}px, ${initialY}px)';
      console.log(i) });
}

window.addEventListener('Mousemove', moveLayers)

