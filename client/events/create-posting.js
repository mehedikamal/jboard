Template.createPosting.events({
  "submit .create-posting-form": function(e) {
    e.preventDefault();
    var formData = $('.create-posting-form').serializeArray(),
        urlTitle = formData[0].value.replace(/\s+/g, '-');

    Meteor.call('createPreview', formData, urlTitle);

    if (typeof formData !== undefined) {
      $('.status-notification').fadeIn();
    }
  }
})
