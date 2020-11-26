const slider = () => {
  const mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide');

  let currentSlide = 0;

  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none';
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'flex';
  };

  const autoPlaySlides = () => {
    prevSlide(slides, currentSlide);
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide);
  };

  const startSlider = (time = 2000) => {
    setInterval(autoPlaySlides, time);
  };
  startSlider();

};

export default slider;