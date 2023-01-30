(() => {
  var sliders = document.getElementsByClassName("slider");

  for(let i = 0; i < sliders.length; i++) {
    var slider = sliders[i];
    var prev = slider.getElementsByClassName("prev")[0];
    var next = slider.getElementsByClassName("next")[0];
  
    var slideShow = new Slider({
      numberOfSlides: slider.children.length,
      slider: slider,
      atStart = function() {
        prev.classList.add('inactive');
      },
      atStart = function() {
        next.classList.add('inactive');
      }
    });
  
    // click events
    prev.onclick = function () {
      slideShow.SlideRight();
      next.classList.remove('inactive');
    };
  
    next.onclick = function () {
      slideShow.SlideLeft();
      prev.classList.remove('inactive');
    };
  }
  
})()