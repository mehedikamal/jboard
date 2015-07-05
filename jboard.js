Posts = new Mongo.Collection('jobs')

Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function() {
  this.render('home')
})

Router.route('/create-posting', function() {
  this.render('create-posting')
})

Router.route('/(.*)', function() {
  this.render('404')
})

if (Meteor.isClient) {
  Template.condensedJobs.helpers({
    frontEndJobs: function() {
      return Posts.find({ category: 'front-end javascript'}, {sort: {createdAt: -1}})
    },
    backEndJobs: function() {
      return Posts.find({ category: 'back-end javascript'}, {sort: {createdAt: -1}})
    },
    isomorphic: function() {
      return Posts.find({ category: 'isomorphic javascript'}, {sort: {createdAt: -1}})
    },
    miscellaneous: function() {
      return Posts.find({ category: 'miscellaneous'}, {sort: {createdAt: -1}})
    },
    design: function() {
      return Posts.find({ category: 'design'}, {sort: {createdAt: -1}})
    },
    salesMarketing: function() {
      return Posts.find({ category: 'sales/marketing'}, {sort: {createdAt: -1}})
    },
    helpDesk: function() {
      return Posts.find({ category: 'help desk/support'}, {sort: {createdAt: -1}})
    },
    systemAdmin: function() {
      return Posts.find({ category: 'system admin'}, {sort: {createdAt: -1}})
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
        email: formData[8].value
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
