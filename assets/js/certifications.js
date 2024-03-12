const slider = document.getElementById('slider');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const scrollAmount = 300;

scrollLeftButton.addEventListener('click', function() {
  slider.scrollLeft -= scrollAmount;
});

scrollRightButton.addEventListener('click', function() {
  slider.scrollLeft += scrollAmount;
});