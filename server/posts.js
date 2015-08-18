Meteor.methods({
  createPreview: function(formData, urlTitle){
    Posts.insert({
      createdAt: new Date().getTime(), // Get current date and time in milliseconds since midnight January 1, 1970 UTC
      expiresAt: new Date().setTime(new Date().getTime() + 2678400000), // Set date 31 days from now in milliseconds
      title: formData[0].value,
      urlTitle: urlTitle,
      description: formData[1].value,
      requirements: formData[2].value,
      schedule: formData[3].value,
      salary: formData[4].value,
      category: formData[5].value,
      name: formData[6].value,
      headquarters: formData[7].value,
      email: formData[8].value,
      website: formData[9].value,
      preview: true
    }, function(err, result){
      if(!err){
        if(result){
          //Router.go('/post/'+result);
        }
      }
    })
  },

  createPosting: function(postID){
      Posts.update(postID, {
        $set: { preview: false }
      });
  }
});


Meteor.publish('getPosts' , function(){
     var d = new Date().getTime();
     return Posts.find({expiresAt: {$gt: d}}, {createdAt: {$lt: d}});
});
