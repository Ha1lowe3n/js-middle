const burger = () => {
  const popupMenu = document.querySelector(".popup-menu");

  const triggerBurger = () => {
    const topMenu = document.querySelector(".top-menu");

    if (window.pageYOffset > 190 && window.innerWidth < 768) {
      topMenu.style.position = "fixed";
    } else {
      topMenu.style.position = "";
    }
  };

  window.addEventListener("scroll", triggerBurger);
  window.addEventListener("resize", triggerBurger);

  document.addEventListener("click", e => {
    const target = e.target;

    if (target.closest(".hidden-large > img")) {
      popupMenu.style.display = "block";
      console.log('hidden-large');
    }

    if (target.closest(".close-menu-btn > img ")) {
      popupMenu.style.display = "none";
      console.log('close-menu-btn');
    }

    if (target.closest(".scroll > a")) {
      popupMenu.style.display = "none";
      console.log('scroll');
    }
  });
};

export default burger;