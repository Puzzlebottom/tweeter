/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const toggleErrorMessage = (error) => {
  const message = error[0].innerText;
  const $alert = $('.new-tweet .alert');

  if (isVisible($alert)) {
    changeAlert(message); // (function() {writeComment('helpers make things easier to read!')})();
  } else {
    showAlert(message); // helpers make things easier to read!
  }
};