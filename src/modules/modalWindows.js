const modalWindows = () => {

  const clearForm = (form) => {
    [...form.elements].forEach(item => {
      if (item.tagName.toLowerCase() !== 'button' && item.type !== 'button') {
        item.value = '';
      }
    });
  };

  const openCloseModal = (open, modalForm, modal) => {
    const modals = document.querySelectorAll('.popup');

    modals.forEach(item => {
      open.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      item.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
          item.style.display = 'none';
          clearForm(modalForm);
        } else {
          target = target.closest('.form-content');
    
          if (!target) {
            item.style.display = 'none';
            clearForm(modalForm);
          }
        }
      });
    });
  };

  //modal 1, id = free_visit_form
  const modalOne = () => {
    const modal = document.getElementById('free_visit_form'),
          openModal = document.querySelector('.open-popup'),
          modalForm = document.getElementById('form2');

    openCloseModal(openModal, modalForm, modal);
  };
  modalOne();

  //modal 2, id = callback_form
  const modalTwo = () => {
    const modalBtn = document.querySelector('.callback-btn'),
          modalCall = document.getElementById('callback_form'),
          modalForm = document.getElementById('form1');

    openCloseModal(modalBtn, modalForm, modalCall);    
  };
  modalTwo();

};

export default modalWindows;