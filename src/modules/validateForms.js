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
  
    const checkbox = (item) => {
     
      if (item.type === 'checkbox') {
        btns.addEventListener('click', () => {
          if (!item.checked) {
            btns.disabled = true;

            const errorText = document.createElement('div');
            errorText.classList.add('validate-error');
            errorText.textContent = 'Подтвердите обработку данных!';
            form.insertAdjacentElement('afterend', errorText);

            const clearError = () => {
              setTimeout(() => {
                btns.disabled = false;
                errorText.remove();
              }, 3000);
            }; 
            clearError();
          } 
        });
      }
      
    };
    checkbox(item);
    
    if (item.type === 'tel') {          
      item.classList.add('phone-class');
      maskPhone(`.${item.className}`);
    }
    
    const changeInput = () => {
      const errorText = document.createElement('div');
      errorText.classList.add('validate-error');

      const clearError = () => {
        item.value = '';
        setTimeout(() => {
          errorText.remove();
        }, 3000);
      };
      
      if (item.type === 'text') {
        if (!validate(item.value.trim()).textBlur() && item.value !== '') {
          errorText.textContent = 'Допустим ввод только русских букв!';
          item.insertAdjacentElement('afterend', errorText);
          clearError();
        } 
      } 
       
    };

    item.addEventListener('blur', changeInput);
  });
};

export default validateForms;