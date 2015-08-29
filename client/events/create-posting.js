Template.createPosting.events({
  "submit .create-posting-form": function(e) {
    e.preventDefault();
    var description = $('input[name=description]');

        description.val($('.ql-editor').eq(0).html()) //capture description before serialization

    var formData = $('.create-posting-form').serializeArray(),
        urlTitle = formData[0].value.replace(/\s+/g, '-');

    Meteor.call('createPreview', formData, urlTitle, function(err, result){
      if(err){
        console.log(err);
      }else{
        console.log(result);
      }
    });

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
}
