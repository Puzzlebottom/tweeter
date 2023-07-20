/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const handleFormSubmit = ($form) => {
  const $alert = $('.new-tweet .alert');
  const text = $($form).serialize(); // If you tweet first thing in the morning, is this breakfast serial?

  if (isVisible($alert)) hideAlert(); // since this handler can only get called when the input is valid, this hides the alert message

  postTweet(text) // ajax POST to db...
    .then(() => {
      resetForm(); // clear the form
      return loadTweets(); // ajax GET from db
    })
    .then((tweets) => {
      return renderTweets(tweets); // render us up some fresh tweets!
    })
    .catch((err) => {
      console.log(err.message); // just in case something goes wrong with one of our requests.
    });

};