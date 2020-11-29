const upperArrow = () => {
  const arrow = document.getElementById('totop');

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

export default upperArrow;