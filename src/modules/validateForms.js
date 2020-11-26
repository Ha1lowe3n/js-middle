import maskPhone from './maskPhone';

const validateForms = (form) => {
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
    item.addEventListener('input', () => {
      if (item.tagName.toLowerCase() !== 'button' && item.type !== 'button') {
        if (item.type === 'tel') {          
          item.classList.add('phone-class');
          maskPhone(`.${item.className}`);
        }
      }
    });

    const changeInput = () => {
      const errorText = document.createElement('div');
      errorText.classList.add('validate-error');
      errorText.style.cssText = `color: red;`;

      const clearError = () => {
        item.insertAdjacentElement('afterend', errorText);
        
        item.value = '';
        setTimeout(() => {
          errorText.remove();
        }, 3000);
      };
      
      if (item.type === 'text') {
        if (!validate(item.value.trim()).textBlur() && item.value !== '') {
          errorText.textContent = 'Допустим ввод только русских букв!';
          clearError();
        } 
      } 
       
    };

    item.addEventListener('blur', changeInput);
  });
};

export default validateForms;