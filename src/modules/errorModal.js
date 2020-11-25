const errorModal = (form) => {
  const thanks = document.getElementById('thanks');
  form.closest('.popup').style.display = 'none';
  const content = thanks.querySelector('.form-wrapper');
  content.innerHTML = `
    <div class="close-form">
      <img src="images/close-icon.png" alt="close" class="close_icon">
    </div>
    <div class="form-content">
      <h4>Ошибка!</h4>
      <p>Что-то пошло не так...</p>
      <button class="btn close-btn">OK</button>
    </div>
  `;
  thanks.style.display = 'block';
  
  setTimeout(() => {
    document.getElementById('thanks').style.display = 'none';
  }, 4000);
};

export default errorModal;