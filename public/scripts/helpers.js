/* eslint-disable no-unused-vars */

const isVisible = ($element) => { // I've got a few elements that toggle display="none"
  return $element.css('display') !== 'none'; // this helps keep my IF statements clean
};

const resetForm = () => { // cleans up the tweet submission form after reset
  $('#tweet-text').val(''); // textarea
  $('.counter').val(140); // char counter
};

const showAlert = (message) => { // sets the error message of the alert element and then toggles it visible
  const $alert = $('#alert');
  const $text = $alert.find('span');

  $text.text(message);
  $alert.slideDown(150);
};

const changeAlert = (message) => { // if the alert is already active, this hides it then shows it again with a new (or same) message
  const $alert = $('#alert');

  $alert.slideUp(150, () => {
    showAlert(message); // reduce reuse recycle
  });
};
