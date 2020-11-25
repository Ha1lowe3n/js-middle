document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Выпадающее меню
  const showClubsMenu = () => {
    const clubsBtn = document.querySelector('.clubs-list'),
          clubsList = clubsBtn.querySelector('ul');

    const toggleClubsList = () => {
      if (clubsList.style.display === 'block') {
        clubsList.style.display = 'none';
      } else {
        clubsList.style.display = 'block';
      }
    };

    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.clubs-list')) {
        toggleClubsList();
      } else {
        clubsList.style.display = 'none';
      }
    });
  };
  showClubsMenu();


  // Modal windows
  const modalWindows = () => {

    const clearForm = (form) => {
      [...form.elements].forEach(item => {
        if (item.tagName.toLowerCase() !== 'button' && item.type !== 'button') {
          item.value = '';
        }
      });
    };

    const openCloseModal = (open, modal, modalForm) => {
      open.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      modal.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('popup-close')) {
          modal.style.display = 'none';
          clearForm(modalForm);
        } else {
          target = target.closest('.form-content');
    
          if (!target) {
            modal.style.display = 'none';
            clearForm(modalForm);
          }
        }
      });
    };

    //modal 1, id = free_visit_form
    const modalOne = () => {
      const modal = document.getElementById('free_visit_form'),
            openModal = document.querySelector('.open-popup'),
            modalForm = document.getElementById('form2');

      openCloseModal(openModal, modal, modalForm);
    };
    modalOne();

    //modal 2, id = callback_form
    const modalTwo = () => {
      const modalBtn = document.querySelector('.callback-btn'),
            modalCall = document.getElementById('callback_form'),
            modalForm = document.getElementById('form1');

      openCloseModal(modalBtn, modalCall, modalForm);    
    };
    modalTwo();

  };
  modalWindows();

});