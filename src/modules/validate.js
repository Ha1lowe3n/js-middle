const validate = (target) => {
  const phoneInput = () => {
    return target.replace(/[^\+\d]/ig, '');
  };

  const textInput = () => {
    return target.replace(/[^а-яё _\-,.;!?\:]$/i, '');
  };

  return {
    phoneInput: phoneInput,
    textInput: textInput
  };
};

export default validate;