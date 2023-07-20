/* eslint-disable no-unused-vars */
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