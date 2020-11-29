const showArrow = () => {
  const arrow = document.getElementById('totop');

  arrow.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 741) {
      arrow.style.display = 'block';
    } else {
      arrow.style.display = 'none';
    }
  });

  const upperArrow = () => {
    const animate = (id) => {
      document.querySelector(id).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    };
  
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      animate('.head');
    });
  };
  upperArrow();
};

export default showArrow;