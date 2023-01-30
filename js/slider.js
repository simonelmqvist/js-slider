Slider = function (options) {  
    var slider = options.slider;
    var numberOfSlides = options.numberOfSlides;
    var atStart = options.atStart;
    var atEnd = options.atEnd;
    var slideIndex = 0;
    var maxIndex = numberOfSlides - 1;
  
    function slideRight() { // prev
      slideIndex--;
        slide();
        if(slideIndex == 0) {
            atStart();
        }
    }
  
    function slideLeft() { // next
      slideIndex++;
        slide();
        if (slideIndex == maxIndex) {
            atEnd();
        }
    }
  
    // slide
    function slide() {
      var percentage = slideIndex * 100;
      slider.style.transform = 'translateX(calc(-' + percentage + '%))';
    }
  
    return {
      SlideLeft: slideLeft,
      SlideRight: slideRight
    }
  
  };