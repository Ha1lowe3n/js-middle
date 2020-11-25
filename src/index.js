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
    //modal 1, id = free_visit_form
    const modalOne = () => {
      const modal = document.getElementById('free_visit_form'),
            openModal = document.querySelector('.open-popup'),
            modelForm = document.getElementById('form2');

      const clearForm = () => {
        [...modelForm.elements].forEach(item => {
          if (item.tagName.toLowerCase() !== 'button' && item.type !== 'button') {
            item.value = '';
          }
        });
      };

      openModal.addEventListener('click', () => {
        modal.style.display = 'block';
      });

      modal.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('popup-close')) {
          modal.style.display = 'none';
          clearForm();
        } else {
          target = target.closest('.form-content');
    
          if (!target) {
            modal.style.display = 'none';
            clearForm();
          }
        }
      });
    };
    modalOne();

  };
  modalWindows();

});