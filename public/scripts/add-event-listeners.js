/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const addEventListeners = () => {

  // Hides or shows the back-to-top and show-form buttons, depending on scroll height.
  $(window).scroll(() => {
    const $height = $(window).scrollTop(); // this gives us the offset in pixels from the top of the page

    if ($height > 300) { // scrolling down
      $('#back-to-top').show();
      $('#show-form').hide();
    }

    if ($height <= 300) { // scrolling up
      $('#back-to-top').hide();
      $('#show-form').show();
    }
  });

  // Toggles visiblity of the tweet composition form when clicking the show-form button
  $('#show-form').on('click', () => {
    const $form = $('.new-tweet'); // tweet composition form

    if (isVisible($form)) { // If it's visible...
      return $form.slideUp(300); // we hide it
    }

    $form.slideDown(300); // otherwise, we show it
    $('#tweet-text').focus(); // and plop the cursor into the textarea
  });

  // Takes us back to the top of the page, ready to compose a new tweet
  $('#back-to-top').click(() => {
    $(window).scrollTop(0); // up we go!
    $('.new-tweet').slideDown(300); // show the form
    $('#tweet-text').focus(); // cursor appears in the textarea
  });

  // Changes the 'remaining characters' counter on every input to the tweet composition form's textarea
  $('#tweet-text').on('input', function() {
    const counter = this.parentElement.querySelector('output');
    const count = 140 - $(this).val().length; // THIS is the textarea of the tweet composition form. The length of its value is how many characters we've used.
    if (count < 0) counter.classList.add('counter-negative'); // css to make it red
    if (count >= 0) counter.classList.remove('counter-negative'); // css to make it not-red
    counter.innerText = count;
  });
};
