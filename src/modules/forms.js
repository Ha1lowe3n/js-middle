import showThanksModal from './showThankModal';
import errorModal from './errorModal';
import validateForms from './validateForms';


const forms = () => {
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = (url, data) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
  };

  const formFunc = (form) => {
    const btns = form.querySelector('button');

    validateForms(form, btns);

    const bindPostData = (form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `color: white`;
        statusMessage.textContent = message.loading;
        
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);
    
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        
        postData('server.php', json)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Status network isn't 200");
          }
          showThanksModal(form);
        })
        .catch((error) => {
          errorModal(form);
          console.error(error);
        })
        .finally(() => {
          form.reset();
          statusMessage.remove();
        });
      });
    };
    bindPostData(form);
    
  };

  forms.forEach(item => {
    formFunc(item);
  });
  
};

export default forms;