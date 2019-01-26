var parallaxContainer = document.querySelector('.parallax');
var layers = Array.from(parallaxContainer.children);

var moveLayers = function moveLayers(e) {

    var initialX = window.innerWidth / 2 - e.pageX;
    var initialY = window.innerHeight / 2 - e.pageY;
    layers.forEach(function (layer, i) {
        var divider = i / 350;
        var positionX = initialX * divider;
        var positionY = initialY * divider;
        layer.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';
    });
};
window.addEventListener('mousemove', moveLayers);