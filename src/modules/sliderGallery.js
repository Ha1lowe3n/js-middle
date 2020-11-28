const sliderGallery = () => {
  
  const galleryBg = document.querySelector(".gallery-bg > .wrapper"),
        gallerySlider = document.querySelector(".gallery-slider"),
        images = document.querySelectorAll(" .gallery-slider > .slide > img"),
        leftArrow = document.createElement("span"),
        rightArrow = document.createElement("span"),
        buttonsWrapper = document.createElement("div");

  galleryBg.classList.add("photo-gallery-wrapper");
  gallerySlider.classList.add("photo-gallery-slider");
  buttonsWrapper.classList.add("photo-gallery-buttons");

  leftArrow.className = "photo-gallery-left";
  leftArrow.innerHTML = `<i class="fa fa-angle-left"></i>`;
  rightArrow.className = "photo-gallery-right";
  rightArrow.innerHTML = `<i class="fa fa-angle-right"></i>`;

  galleryBg.append(leftArrow);
  galleryBg.append(rightArrow);
  galleryBg.append(buttonsWrapper);

  images.forEach(item => {
    if (item === images[0]) {
      item.classList.add("photo-gallery-image-active");
    }

    item.classList.add("photo-gallery-images");
  });

  for (let i = 0; i < images.length; i++) {
    const newDot = document.createElement("button");
    newDot.classList.add("photo-gallery-dots");

    if (i === 0) {
      newDot.classList.add("photo-gallery-dot-active");
    }

    buttonsWrapper.append(newDot);
  }

  const sliderDots = document.querySelectorAll(".photo-gallery-dots");

  const prevSlide = () => {
    for (let i = 0; i < images.length; i++) {
      if (images[0].classList.contains("photo-gallery-image-active")) {
        images[0].classList.remove("photo-gallery-image-active");
        images[0].classList.add("photo-gallery-images");
        images[images.length - 1].classList.add("photo-gallery-image-active");
        sliderDots[0].classList.remove("photo-gallery-dot-active");
        sliderDots[images.length - 1].classList.add("photo-gallery-dot-active");
        
        return;
      }

      if (images[i].classList.contains("photo-gallery-image-active")) {
        images[i].classList.remove("photo-gallery-image-active");
        images[i - 1].classList.add("photo-gallery-image-active");
        sliderDots[i].classList.remove("photo-gallery-dot-active");
        sliderDots[i - 1].classList.add("photo-gallery-dot-active");
        
        return;
      }
    }
  };

  const nextSlide = () => {
    for (let i = 0; i < images.length; i++) {
      if (
        images[images.length - 1].classList.contains(
          "photo-gallery-image-active"
        )
      ) {
        images[images.length - 1].classList.remove(
          "photo-gallery-image-active"
        );

        images[images.length - 1].classList.add("photo-gallery-images");
        images[0].classList.add("photo-gallery-image-active");
        sliderDots[images.length - 1].classList.remove(
          "photo-gallery-dot-active"
        );

        sliderDots[0].classList.add("photo-gallery-dot-active");

        return;
      }

      if (images[i].classList.contains("photo-gallery-image-active")) {
        images[i].classList.remove("photo-gallery-image-active");
        images[i].classList.add("photo-gallery-images");
        images[i + 1].classList.add("photo-gallery-image-active");
        sliderDots[i].classList.remove("photo-gallery-dot-active");
        sliderDots[i + 1].classList.add("photo-gallery-dot-active");

        return;
      }
    }
  };

  galleryBg.addEventListener("click", e => {
    const target = e.target;
    console.log(target);

    if (target.closest(".photo-gallery-left")) {
      prevSlide();
    }

    if (target.closest(".photo-gallery-right")) {
      nextSlide();
    }

    if (target.closest(".photo-gallery-dots")) {
      for (let i = 0; i < images.length; i++) {
        if (sliderDots[i] === target) {
          images.forEach(elem =>
            elem.classList.remove("photo-gallery-image-active")
          );

          sliderDots.forEach(elem =>
            elem.classList.remove("photo-gallery-dot-active")
          );

          images[i].classList.add("photo-gallery-image-active");
          sliderDots[i].classList.add("photo-gallery-dot-active");
        }
      }
    }
  });

  let interval;

  interval = setInterval(nextSlide, 3000);

  galleryBg.addEventListener("mouseover", e => {
    if (
      e.target.matches(".photo-gallery-left") ||
      e.target.matches(".photo-gallery-right") ||
      e.target.matches(".photo-gallery-dots")
    ) {
      clearInterval(interval);
    }
  });

  galleryBg.addEventListener("mouseout", e => {
    if (
      e.target.matches(".photo-gallery-left") ||
      e.target.matches(".photo-gallery-right") ||
      e.target.matches(".photo-gallery-dots")
    ) {
      interval = setInterval(nextSlide, 3000);
    }
  });
};

export default sliderGallery;