/* eslint-disable no-undef */

/**
 * I've tried to keep this organized, so the flow here should be
 * pretty self-explanatory:
 *
 * 1) Load tweets
 * II) Render tweets
 * 3rd) Add some event listeners (clickity-clack, amirite?)
 * B) If someone uses the form, validate their parking
 * B cont'd) The validator has error and submit handlers attached.
 */

$().ready(() => {
  loadTweets()
    .then((tweets) => renderTweets(tweets))
    .catch((err) => console.log(err.message));

  addEventListeners();

  const $form = $('.new-tweet').find('form');
  validateInput($form);
});
