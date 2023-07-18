const renderTweets = (tweetsArray) => {
  for (const tweet of tweetsArray) {
    $('#tweets').append(createTweetElement(tweet));
  }
};

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

const data = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png'
      ,
      handle: '@SirIsaac'
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants'
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd'
    },
    content: {
      text: 'Je pense , donc je suis'
    },
    created_at: 1461113959088
  }
];

$().ready(() => {
  renderTweets(data);
});
