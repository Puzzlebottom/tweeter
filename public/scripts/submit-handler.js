$().ready(() => {
  $('.new-tweet').find('form').submit(function(e) {
    e.preventDefault();
    $.post('/tweets', $(this).serialize());
  });
});