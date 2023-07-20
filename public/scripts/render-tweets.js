/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const renderTweets = (tweetsArray) => {
  const tweetContainer = $('#tweets'); // get container element once

  tweetContainer.empty(); // clear out any currently rendered tweets
  /**
   * Because the server doesn't respond to a POST with the data for
   * the newly registered tweet, we have to make a GET request in order
   * to update our DOM. This gives us every tweet in the db, so we have
   * to clear out the container to avoid duplicates.
   *
   * If we had the actual user data prior to submit (instead of generating
   * it randomly) we'd have everything we needed to update our DOM as
   * soon as we receive the all clear status from our POST request, and
   * wouldn't need to make the GET request at all.
   *
   * Alternately, the server could respond to our POST with an id for
   * the newly registered tweet, and we could make a GET request for that
   * tweet alone.
   *
   * Tweet ids generated server-side would also allow us to filter newly
   * fetched tweets against those we've already added to the DOM. We COULD
   * filter them now using the timestamps, but that would a terrible way
   * to do it; a millisecond is a long time, and several tweets could be
   * made at the same time.
   */

  for (const tweet of tweetsArray.reverse()) { // the 'server-side' sort function is implemented wrong. It sorts oldest first.
    tweetContainer.append(createTweetElement(tweet)); // append each tweet
  }
}; s;