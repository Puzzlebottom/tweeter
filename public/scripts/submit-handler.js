$().ready(() => {
  $('.new-tweet').find('form').validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      text: {
        required: true,
        maxlength: 140
      }
    },
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
      $.post('/tweets', $(form).serialize());
    }
  });
});
