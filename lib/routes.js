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

Router.route('/:_cat_id', {
  template: 'listByCategory',
  onBeforeAction: function () {
    var title = this.params._cat_id;
        title = title.replace(/_/g, ' ');
        title = title.charAt(0).toUpperCase() + title.substring(1);

        (title) ? this.next() : this.render('404');

  },
  data: function () {
    var title = UI._globalHelpers.prettyStrings(this.params._cat_id);

    var jobs = {
      jobs: Posts.find({ category: this.params._cat_id }),
      category: title
    };

    return jobs;
  },
  onAfterAction: function () {
    if (Meteor.isClient) {
      var data = this.data()

      SEO.set({
        title: data.category + ' | noOfficeNeeded.com',
        meta: {
          'description': data.category + ' listing at noOfficeNeeded.com',
          'robots': 'index,follow'
        },
        og: {
          'title': data.category + ' | noOfficeNeeded.com',
          'description': data.category + ' listing at noOfficeNeeded.com'
        }
      })
    } // set SEO for listByCategory
  }
});

Router.route('/:title/:_id', {
  template: 'job-posting',
  onBeforeAction: function () {
    var post = Posts.findOne({ _id: this.params._id }, { preview: true });

    (post) ? this.next() : this.render('404');

  },
  data: function () {
    var post = Posts.findOne({ _id: this.params._id });
    return post;
  },
  onAfterAction: function () {
    if (Meteor.isClient) {
      var jobData = this.data()

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
      })
    } // set SEO for jobPosting
  }
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
