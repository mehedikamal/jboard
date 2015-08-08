Meteor.methods({
  createPreview: function(formData, urlTitle){
    Posts.insert({
      createdAt: new Date().toLocaleDateString(),
      expiresAt: new Date().addDays(31).toLocaleDateString(), // Add 31 days from current date
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
     return Posts.find();
});
