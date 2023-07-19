/* eslint-disable no-undef */

const createTweetElement = (tweetObject) => {

  // Get tweet data by destructuring
  const { name, avatars, handle } = tweetObject.user;
  const { text } = tweetObject.content;


  // Create main tweet element
  const $tweet = $('<article>').addClass('tweet');


  // Create header element, appending image, username and handle elements
  const $header = $('<header>');
  const $image = $('<img>').attr('src', avatars);
  const $userName = $('<span>').text(name);
  const $div = $('<div>').append($image, $userName);
  const $address = $('<address>').text(handle);
  $header.append($div, $address);


  // Create content element
  const $content = $('<section>').text(text);


  // Create footer element, appending timeSincePost and icon elements
  const $footer = $('<footer>');

  const $timeSincePost = $('<time>').addClass('timeago').text(timeago.format(tweetObject.created_at)); // global timeago.format method

  const $icons = $('<span>').addClass('icons');
  const $flagIcon = $('<i>').addClass('fa-solid fa-flag');
  const $retweetIcon = $('<i>').addClass('fa-solid fa-retweet');
  const $heartIcon = $('<i>').addClass('fa-solid fa-heart');
  const $inexplicableOne = $('<div>').text('1');
  $icons.append($flagIcon, $retweetIcon, $heartIcon, $inexplicableOne); // span contains icons

  $footer.append($timeSincePost, $icons);


  // Append header, content and footer elements to tweet
  $tweet.append($header, $content, $footer);

  return $tweet;
};


const renderTweets = (tweetsArray) => {
  const tweetContainer = $('#tweets'); // get container element once

  for (const tweet of tweetsArray) {
    tweetContainer.append(createTweetElement(tweet)); // append each tweet
  }
};

const loadTweets = () => {
  $.ajax({ url: '/tweets' })
    .then((tweets) => {
      $('#tweets').empty();
      renderTweets(tweets.reverse()); // array needs to be reversed because the 'server-side' function sortNewestFirst() is implemented wrong; it actually sorts the tweetArray ascending by tweet.created_at, which would be oldest first (more milliseconds = newer).
    });
};

const postTweet = (tweet) => {
  $.ajax({
    type: 'POST',
    url: '/tweets',
    data: tweet
  })
    .then(() => {
      clearForm();
      loadTweets();
    });
};

const isVisible = ($element) => {
  return $element.css('display') !== 'none';
};


const clearForm = () => {
  $('#tweet-text').val('');
  $('.counter').val(140);
};

$().ready(() => {
  loadTweets();

  const formElement = $('.new-tweet').find('form');

  formElement.validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,

    rules: { text: { required: true, maxlength: 140 } },

    messages: {
      text: {
        required: "You can't tweet an empty tweet, you twit!",
        maxlength: 'This tweet is twoo long!'
      }
    },

    errorPlacement: (error) => {
      const message = error[0].innerText;
      const errorElement = $('section.error');

      if (isVisible(errorElement)) {
        errorElement.slideUp(150, () => {
          errorElement.find('span').text(message);
          errorElement.slideDown(150, () => console.log('Down...'));
        });
      } else {
        errorElement.find('span').text(message);
        errorElement.slideDown(150, () => console.log('Down...'));
      }
    },

    submitHandler: (form) => {
      const errorElement = $('section.error');

      if (isVisible(errorElement)) {
        $('.error').slideUp(150);
      }

      const text = $(form).serialize();
      postTweet(text);
    }
  });
});
