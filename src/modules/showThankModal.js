const showThanksModal = (form) => {
  const thanks = document.getElementById('thanks');
  form.closest('.popup').style.display = 'none';
  thanks.style.display = 'block';
  
  setTimeout(() => {
    document.getElementById('thanks').style.display = 'none';
  }, 4000);
};

export default showThanksModal;