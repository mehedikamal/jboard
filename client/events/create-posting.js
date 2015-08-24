Template.createPosting.events({
  "submit .create-posting-form": function(e) {
    e.preventDefault();
    var description = $('input[name=description]'),
        requirements = $('input[name=requirements]');

        description.val($('.ql-editor').eq(0).html()) //capture description before serialization
        requirements.val($('.ql-editor').eq(1).html()) //capture requirements before serialization

    var formData = $('.create-posting-form').serializeArray(),
        urlTitle = formData[0].value.replace(/\s+/g, '-');

    Meteor.call('createPreview', formData, urlTitle);

    if (typeof formData !== undefined) {
      $('.status-notification').fadeIn();
    }
  }
})

Template.createPosting.rendered = function() {
  var editorOne = new Quill('#editor-one', {
    modules: {
      'multi-cursor': true,
      'toolbar': { container: '#toolbar-one' }
    },
    theme: 'snow'
  })
  var editorTwo = new Quill('#editor-two', {
    modules: {
      'multi-cursor': true,
      'toolbar': { container: '#toolbar-two' }
    },
    theme: 'snow'
  })
}
