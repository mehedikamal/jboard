/** Primary Routes Defention **/
Router.configure({
  layoutTemplate: 'main',
  waitOn: function () {
    return Meteor.subscribe('getPosts');
  }
});

Router.route('/', function () {
  this.render('home');
  fastRender: true
});

Router.route('/create-posting', function () {
  this.render('create-posting')
});

/** Dynamic SEO data in this route */
Router.route('previewPostEdit', {
  path: '/:_id/preview/edit',

  onBeforeAction: function (pause) {
    var post = Posts.findOne({ _id: this.params._id, preview: true });
    if (post) {
      this.next();
    } else {
      this.render('404');
      return false;
    }
  },
  data: function () {
    var post = Posts.findOne({ _id: this.params._id });
    console.log(post);
    return post;
  },
  onAfterAction: function () {

    if (!Meteor.isClient) {
      return;
    }

    var jobData = this.data();

    SEO.set({
      title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
      meta: {
        'description': jobData.description,
        'robots': 'noindex,nofollow'
      },
      og: {
        'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        'description': jobData.description
      }
    });
  },
  action: function () {
    if (this.ready()) {
      this.render();
    }
  },
  template: 'create-posting',
  layoutTemplate: 'main'
});



/**       Routes Map Defention Start Here
 * These will be updated in the future using the Router.route() 
 * dynamic SEO data is also set below here, ever other route 
 * will use the default SEO headers in the mean time  
 **/
Router.map(function () {
  this.route('listByCategory', {
    path: '/:_cat_id',
    onBeforeAction: function (pause) {

      var title = this.params._cat_id;
      title = title.replace(/_/g, ' ');
      title = title.charAt(0).toUpperCase() + title.substring(1);

      (title) ? this.next() : this.render('404');

    },
    data: function () {

      var title = this.params._cat_id;
      title = title.replace(/_/g, ' ');
      title = title.charAt(0).toUpperCase() + title.substring(1);
      var jobs = {
        jobs: Posts.find({ category: this.params._cat_id }),
        category: title
      };

      return jobs;
    },
    /** Start of Dynamic SEO **/
    onAfterAction: function () {

      var data;

      if (!Meteor.isClient) {
        return;
      }

      data = this.data().jobs;

      SEO.set({
        title: data.category.tile + ' Jobs at ' + '| noOfficeNeeded.com',
        meta: {
          'description': data.category.tile + ' listing at noOfficeNeeded.com',
          'robots': 'index,follow'
        },
        og: {
          'title': data.category.tile + ' Jobs at ' + '| noOfficeNeeded.com',
          'description': data.category.tile + ' listing at noOfficeNeeded.com'
        }
      });
    }
  });
});


Router.map(function () {
  this.route('job-posting', {
    path: '/:title/:_id',
    onBeforeAction: function (pause) {

      var post = Posts.findOne({ _id: this.params._id }, { preview: true });

      (post) ? this.next() : this.render('404');

    },
    data: function () {
      var post = Posts.findOne({ _id: this.params._id });
      return post;
    },
    /** Start of Dynamic SEO **/
    onAfterAction: function () {

      if (!Meteor.isClient) {
        return;
      }

      var jobData = this.data();

      SEO.set({
        title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        meta: {
          'description': jobData.description,
          'robots': 'index,nofollow'
        },
        og: {
          'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
          'description': jobData.description
        }
      });
    },
    /** End of Dynamic SEO **/
    action: function () {
      if (this.ready()) {
        this.render();
      }
    },
    template: 'job-posting',
    layoutTemplate: 'main'
  });
});

Router.map(function () {
  this.route('previewPost', {
    path: '/:_id/preview',
    waitOn: function () {
      return Meteor.subscribe('getPosts');
    },
    onBeforeAction: function (pause) {

      var post = Posts.findOne({ _id: this.params._id }, { preview: true });

      (post) ? this.next() : this.render('404');

    },
    data: function () {
      var post = Posts.findOne({ _id: this.params._id });
      return post;
    },
    /** Start of Dynamic SEO **/
    onAfterAction: function () {

      if (!Meteor.isClient) {
        return;
      }

      var jobData = this.data();

      SEO.set({
        title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        meta: {
          'description': jobData.description,
          'robots': 'index,nofollow'
        },
        og: {
          'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
          'description': jobData.description
        }
      });
    },
    /** End of Dynamic SEO **/
    action: function () {
      if (this.ready()) {
        this.render();
      }
    },
    template: 'job-posting',
    layoutTemplate: 'main'
  });
});
/** Routes Map Defention Ends Here **/


// This must remain at the end of the file at all times
Router.route('/(.*)', function () {
  this.render('404')
});