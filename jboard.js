Posts = new Mongo.Collection('jobs')
Meteor.subscribe('getPosts');

Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function() {
  this.render('home');
  fastRender: true
})

Router.route('/create-posting', function() {
   this.render('create-posting')
})

Router.route('/:title/:_id', function() {
  this.render('job-posting', {
    data: function() {
      var post = Posts.findOne({ _id: this.params._id});
      document.title = post.name +' - ' + post.title + " | noOfficeNeeded.com";
      return post;
    }
  });
  fastRender: true;
})

Router.route('/:_cat_id', function() {
  this.render('listByCategory', {
    data: function() {
      var title = this.params._cat_id;
      title = title.replace(/_/g, ' ');
      title = title.charAt(0).toUpperCase() + title.substring(1);
      var jobs = {
                  jobs: Posts.find({ category: this.params._cat_id}),
                  category: title
                 };

      return jobs;
    }

  });
  fastRender: true;
})

Router.route('/(.*)', function() {
  this.render('404')
})

if (Meteor.isClient) {
  Template.condensedJobs.helpers({
    frontEndJobs: function() {
      document.title = "Hello World";
      return Posts.find({ category: 'front_end_jobs'}, {sort: {createdAt: -1}})
    },
    backEndJobs: function() {
      return Posts.find({ category: 'back_end_jobs'}, {sort: {createdAt: -1}})
    },
    isomorphic: function() {
      return Posts.find({ category: 'fullstack_jobs'}, {sort: {createdAt: -1}})
    },
    miscellaneous: function() {
      return Posts.find({ category: 'miscellaneous_jobs'}, {sort: {createdAt: -1}})
    },
    design: function() {
      return Posts.find({ category: 'design_jobs'}, {sort: {createdAt: -1}})
    },
    salesMarketing: function() {
      return Posts.find({ category: 'sales_marketing_jobs'}, {sort: {createdAt: -1}})
    },
    helpDesk: function() {
      return Posts.find({ category: 'help_desk_support_jobs'}, {sort: {createdAt: -1}})
    },
    systemAdmin: function() {
      return Posts.find({ category: 'system_admin_jobs'}, {sort: {createdAt: -1}})
    },

  })

  Template.createPosting.events({
    "submit .create-posting-form": function(e) {
      e.preventDefault();
      var formData = $('.create-posting-form').serializeArray();
      var urlTitle = formData[0].value.replace(/\s+/g, '-');

      Meteor.call('createPreview', formData, urlTitle);

      if (typeof formData !== undefined) {
        $('.status-notification').fadeIn();
      }
    }
  })

  Template.body.events({
    // place your delegated events here

  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('Server Started');
  });
}
