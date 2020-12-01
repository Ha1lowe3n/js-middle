import maskPhone from './maskPhone';

const validateForms = (form, btns) => {

  const validate = (target) => {
    const phoneInput = () => {
      return target.replace(/[^\+\d]/ig, '');
    };
  
    const textInput = () => {
      return target.replace(/[^а-яё _\-,.;!?\:]$/i, '');
    };

    const phoneBlur = () => {
      let re = /\+?[78]([-()]*\d){10}/g;
      let valid = re.test(target);  
  
      return valid;
    };

    const textBlur = () => {
      let re = /^[а-яё]/gi;
      let valid = re.test(target);  
      
      return valid;
    };
  
    return {
      phoneInput: phoneInput,
      textInput: textInput,
      phoneBlur: phoneBlur,
      textBlur: textBlur
    };
  };

  [...form.elements].forEach(item => {

    const fail = (message) => {
      btns.disabled = true;

      const errorText = document.createElement('div');
      errorText.classList.add('validate-error');
      errorText.textContent = message;
      form.insertAdjacentElement('afterend', errorText);

      const clearError = () => {
        setTimeout(() => {
          btns.disabled = false;
          errorText.remove();
        }, 3000);
      }; 
      clearError();
    };

    const radio = (item) => {
      const radio1 = document.getElementById('footer_leto_mozaika'),
            radio2 = document.getElementById('footer_leto_schelkovo');
  
      if (item.type === 'radio') {
        if (item.id === 'footer_leto_mozaika') {
          btns.addEventListener('click', () => {
            if (!radio1.checked && !radio2.checked) {
              fail('Выберите один из клубов!');
            }
          });
        }
      } 
        
    };
    radio(item);
  
    const checkbox = (item) => {
      if (item.type === 'checkbox') {
        btns.addEventListener('click', () => {
          if (!item.checked) {
            fail('Подтвердите обработку данных!');
          } 
        });
      } 
    };
    checkbox(item);
    
    if (item.type === 'tel') {          
      item.classList.add('phone-class');
      maskPhone(`.${item.className}`);
    }

    let isRun = true;

    const changeInput = () => {
      const errorText = document.createElement('div');
      errorText.classList.add('validate-error');

      const clearError = () => {
        item.value = '';
        setTimeout(() => {
          errorText.remove();
          isRun = true;
        }, 3000);
      };
      
      if (item.type === 'text') {
        if (
          !validate(item.value.trim()).textBlur() && item.value !== '' && 
          isRun === true
          ) {
          errorText.textContent = 'Допустим ввод только русских букв!';
          isRun = false;

          item.insertAdjacentElement('afterend', errorText);
          clearError();       
        } 
      } 
       
    };

    item.addEventListener('blur', changeInput);
  });
};

export default validateForms;