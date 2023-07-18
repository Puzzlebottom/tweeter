const createTweetElement = (tweetObject) => {
  const { name, avatars, handle } = tweetObject.user;
  const { text } = tweetObject.content;

  return $(`<article class="tweet">
  <header>
  <div>
  <img src=${avatars} />
  <span>${name}</span>
  </div>
  <address>${handle}</address>
  </header>
  <section>
  ${text}
  </section>
  <footer>
  <time>${tweetObject.created_at}</time>
  <span class="icons">
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  <div>1</div>
  </span>
  </footer>
  </article>`);
};

const renderTweets = (tweetsArray) => {
  for (const tweet of tweetsArray) {
    $('#tweets').append(createTweetElement(tweet));
  }
};

$().ready(() => {
  $.get('/tweets', renderTweets);
})();
