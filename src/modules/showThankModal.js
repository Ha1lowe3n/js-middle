const showThanksModal = (form) => {
  const thanks = document.getElementById('thanks');
  if (form.closest('.popup')) {
    form.closest('.popup').style.display = 'none';
  }
  
  thanks.style.display = 'block';
  
  setTimeout(() => {
    thanks.style.display = 'none';
  }, 4000);
};

export default showThanksModal;