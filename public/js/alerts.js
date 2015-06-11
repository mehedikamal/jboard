$(document).ready( function() {
  $('.alerts-button').click( function(e) {
    e.preventDefault();
    $.post("#", {
      email: $('.email-input').val(),
      category: $('.category-input').val()
    }, function() {
       $('.alerts-container .col-md-12').append('<br><div class="alert alert-success" role="alert">We\'ll let you know when new opportunities pop-up!</div>');
    });
  });
});
