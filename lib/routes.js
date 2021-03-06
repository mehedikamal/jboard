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
    // Removes HTML tags from job description
    var jobDescription = jobData.description.replace(/(<([^>]+)>)/ig, "");

    SEO.set({
      title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
      meta: {
        'description': jobDescription,
        'robots': 'noindex,nofollow'
      },
      og: {
        'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        'description': jobDescription
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
    var categories = Posts.findOne({ category: this.params._cat_id });

    (categories) ? this.next() : this.render('404')

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
      var jobData = this.data(),
          jobDescription = UI._globalHelpers.prettyStrings(jobData.description);

      SEO.set({
        title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        meta: {
          'description': jobDescription,
          'robots': 'index,nofollow'
        },
        og: {
          'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
          'description': jobDescription
        }
      })
    } // set SEO for jobPosting
  }
});

Router.route('/:_id/preview', {

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

      // Removes HTML tags from job description
      var jobDescription = jobData.description.replace(/(<([^>]+)>)/ig, "");

      SEO.set({
        title: jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
        meta: {
          'description': jobDescription,
          'robots': 'index,nofollow'
        },
        og: {
          'title': jobData.title + ' job at ' + jobData.name + ' | noOfficeNeeded.com',
          'description': jobDescription
        }
      });
    },
    /** End of Dynamic SEO **/
    action: function () {
      if (this.ready()) {
        this.render();
      }
    }
  });

/** Routes Map Defention Ends Here **/


// This must remain at the end of the file at all times
Router.route('/(.*)', function () {
  this.render('404')
});
