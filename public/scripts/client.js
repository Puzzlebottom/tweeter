/* eslint-disable no-undef */
const createTweetElement = (tweetObject) => {
  const { name, avatars, handle } = tweetObject.user;
  const { text } = tweetObject.content;

  return $(`<article class="tweet">
  <header>
  <div>
  <img src=${avatars} />
  <span>${escapeText(name)}</span>
  </div>
  <address>${escapeText(handle)}</address>
  </header>
  <section>
  ${escapeText(text)}
  </section>
  <footer>
  <time class="timeago" >${timeago.format(tweetObject.created_at)}</time>
  <span class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  <div>1</div>
  </span>
  </footer>
  </article>`);
};

const escapeText = (string) => {
  const textNode = document.createTextNode(string);
  const div = document.createElement('div');
  div.appendChild(textNode);
  return div.innerHTML;
};

const renderTweets = (tweetsArray) => {
  for (const tweet of tweetsArray.reverse()) {
    $('#tweets').append(createTweetElement(tweet));
  }
};

const loadTweets = () => {
  $.get('/tweets', (res) => {
    $('#tweets').empty();
    renderTweets(res);
  });
};

const clearForm = () => {
  $('#tweet-text').val('');
  $('.counter').val(140);
};

const postTweet = (tweet) => {
  $.post('/tweets', tweet, () => {
    clearForm();
    loadTweets();
  });
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
      alert(error[0].innerText);
    },

    submitHandler: (form) => {
      const text = $(form).serialize();
      postTweet(text);
    }
  });
});
