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
