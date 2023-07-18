$().ready(() => {
  $('#tweet-text').on('input', function() {
    const counter = this.parentElement.querySelector('output');
    const count = 140 - $(this).val().length;
    if (count < 0) counter.classList.add('counter-negative');
    if (count >= 0) counter.classList.remove('counter-negative');
    counter.innerText = count;
  });
});