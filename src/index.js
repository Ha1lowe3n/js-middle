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
        e.preventDefault();
        toggleClubsList();
      } else {
        e.preventDefault();
        clubsList.style.display = 'none';
      }
    });
  };
  showClubsMenu();
});