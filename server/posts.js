Meteor.methods({
  createPreview: function(formData, urlTitle){
    Posts.insert({
      createdAt: new Date().getTime(), // Get current date and time in milliseconds since midnight January 1, 1970 UTC
      expiresAt: new Date().setTime(new Date().getTime() + 2678400000), // Set date 31 days from now in milliseconds
      title: formData[0].value,
      urlTitle: urlTitle,
      description: formData[1].value,
      schedule: formData[2].value,
      salary: formData[3].value,
      category: formData[4].value,
      name: formData[5].value,
      headquarters: formData[6].value,
      email: formData[7].value,
      website: formData[8].value,
      preview: true
    }, function(err, result){
      if(!err){
        if(result){
          //Router.go('/post/'+result);
        }
      }
    })
  },
  confirmPosting: function(postID){
      Posts.update({ '_id' : postID}, {
        $set: { preview: false }
      });
  },
  listByCategory: function() {
    Meteor.subscribe('getPosts')

    var categories = [
      { category: 'front_end_jobs' },
      { category: 'back_end_jobs' },
      { category: 'fullstack_jobs' },
      { category: 'miscellaneous_jobs' },
      { category: 'design_jobs' },
      { category: 'sales_marketing_jobs' },
      { category: 'help_desk_support_jobs' },
      { category: 'system_admin_jobs' }
    ]
    var arr = []
    for (var category in categories) {
      if (categories.hasOwnProperty) {
        Posts.find(
          { category: categories[category].category },
          { sort: { createdAt: -1 }}
        ).forEach( function(result) {
          arr.push(result)
        })
      }
    }
    return arr
  }
});

Meteor.publish('getPosts' , function(){
     var d = new Date().getTime();
     return Posts.find({expiresAt: {$gt: d}}, {createdAt: {$lt: d}});
});
