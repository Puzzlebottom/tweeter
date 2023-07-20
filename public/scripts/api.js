/* eslint-disable no-unused-vars */

/**
 * Returning here lets us use the .then syntax in client.js.
 * I could have called renderTweets here instead, but I think
 * it's clearer to show my work where loadTweets is invoked.
 * Also, loading tweetData and rendering tweetData into markup
 * are distinct concerns I'd rather implement separately.
 * */

const loadTweets = () => {
  return $.ajax({ url: '/tweets' });
};


/**
 * Ditto, but moreso: after posting I need to 1) clear my tweetContainer,
 * 2) GET the updated tweetData from the DB, and then 3) render them.
 * That's more than I want this sweet little function to do.
 */

const postTweet = (tweet) => {
  return $.ajax({
    type: 'POST',
    url: '/tweets',
    data: tweet
  });
};