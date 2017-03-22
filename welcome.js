$(document).ready(function() {
  var synonyms = ['them', 'your family', 'your spouse', 'your significant other', 'anyone']
  var index = 1;
  var placeholder = $("#them")
  var interval = setInterval(function() {
    placeholder.html(synonyms[index % synonyms.length])
    index++;
  }, 5000);
});
