const giftModal = () => {
  const gift = document.querySelector('.fixed-gift'),
        giftModal = document.getElementById('gift');

  if (gift) {
    gift.addEventListener('click', () => {
      giftModal.style.display = 'block';
      gift.remove();
    });
  }
  
};

export default giftModal;