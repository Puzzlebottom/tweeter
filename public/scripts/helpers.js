/* eslint-disable no-unused-vars */

/**
 * I've got a few elements that toggle display="none"
 * this helps keep my IF statements clean
*/
const isVisible = ($element) => {
  return $element.css('display') !== 'none';
};


/**
 * Cleans up the tweet submission form after reset
 */
const resetForm = () => {
  $('#tweet-text').val(''); // textarea
  $('.counter').val(140); // char counter
};


/**
 * Sets the error message of the alert element and then toggles it visible
 */
const showAlert = (message) => {
  const $alert = $('.new-tweet .alert');
  const $text = $alert.find('span');

  $text.text(message);
  $alert.slideDown({
    duration: 150,
    start() {
      $alert.css('display', 'flex');
    }
  });
};


/**
 * If the alert is already active, this hides it then shows it again with a new (or same) message
 */
const changeAlert = (message) => {
  const $alert = $('.new-tweet .alert');

  $alert.slideUp(150, () => {
    showAlert(message); // reduce reuse recycle
  });
};


/**
 * I'll give you one guess...
 */
const hideAlert = () => {
  $('.new-tweet .alert').slideUp(150);
};
