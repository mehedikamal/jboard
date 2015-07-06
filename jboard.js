Posts = new Mongo.Collection('jobs')
Categories = new Mongo.Collection('categories')

Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function() {
  this.render('home', {
    data: function() {
      pageTitle = 'hello world';
      return pageTitle;
    }
  })
})

Router.route('/create-posting', function() {
  this.render('create-posting')
})

Router.route('/:title/:_id', function() {
  this.render('job-posting', {
    data: function() {
      return Posts.findOne({ _id: this.params._id})
    }
  })
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
})

Router.route('/(.*)', function() {
  this.render('404')
})

if (Meteor.isClient) {
  Template.condensedJobs.helpers({
    frontEndJobs: function() {
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
    }
  })

  Template.createPosting.events({
    "submit .create-posting-form": function(e) {
      e.preventDefault();
      var formData = $('.create-posting-form').serializeArray();

      Posts.insert({
        createdAt: new Date().toLocaleDateString(),
        title: formData[0].value,
        description: formData[1].value,
        requirements: formData[2].value,
        schedule: formData[3].value,
        salary: formData[4].value,
        category: formData[5].value,
        name: formData[6].value,
        headquarters: formData[7].value,
        email: formData[8].value,
        website: formData[9].value
      })

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
  });
}
