const sliderCarus = () => {
  
  const slider = document.querySelector(".services-slider"),
        slides = [...slider.children],
        images = document.querySelectorAll(".services-slider > .slide > img"),
        leftArrow = document.createElement("span"),
        rightArrow = document.createElement("span");

  leftArrow.className = "carousel-slider-left";
  leftArrow.innerHTML = `<i class="fa fa-angle-left"></i>`;
  rightArrow.className = "carousel-slider-right";
  rightArrow.innerHTML = `<i class="fa fa-angle-right"></i>`;

  slider.append(leftArrow);
  slider.append(rightArrow);

  const menu = () => {

    let mover = 0,
        position = 0;

    slider.addEventListener("click", event => {
      const target = event.target;

      if (!target.closest(".carousel-slider-left, .carousel-slider-right")) {
        return;
      }

      if (target.closest(".carousel-slider-left") && position > 0) {
        if (window.innerWidth <= 768) {
          mover +=
            slides[0].getBoundingClientRect().width -
            images[0].getBoundingClientRect().width +
            images[0].getBoundingClientRect().width;

          position--;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });

          return;
        }

        if (window.innerWidth < 1100) {
          mover += slides[0].getBoundingClientRect().width;
          position--;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });

          return;
        }

        if (window.innerWidth > 1100) {
          mover += 226;
          position--;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });

          return;
        }
      }

      if (target.closest(".carousel-slider-right")) {
        if (window.innerWidth <= 768 && position !== slides.length - 1) {
          mover -=
            slides[0].getBoundingClientRect().width -
            images[0].getBoundingClientRect().width +
            images[0].getBoundingClientRect().width;

          position++;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });
          return;
        }

        if (
          window.innerWidth > 768 &&
          window.innerWidth <= 1100 &&
          position !== slides.length - 3
        ) {
          mover -= slides[0].getBoundingClientRect().width;
          position++;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });
          
          return;
        }

        if (window.innerWidth > 1100 && position !== slides.length - 5) {
          mover -= 226;
          position++;

          slides.forEach(item => {
            item.style.transform = `translateX(${mover}px)`;
          });

          return;
        }
      }
    });
  };

  menu();
  window.addEventListener("resize", menu);
};

export default sliderCarus;