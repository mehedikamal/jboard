Posts = new Mongo.Collection('jobs')
Meteor.subscribe('getPosts');

Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', function () {
  this.render('home');
  fastRender: true
})

Router.route('/create-posting', function () {
  this.render('create-posting')
})

Router.map(function () {
  this.route('previewPost', {
    path: '/:_id/preview',
    waitOn: function () {
        return Meteor.subscribe('getPosts');
    },
    onBeforeAction: function (pause) {
      
      var post = Posts.findOne({ _id: this.params._id} ,{preview: true });
      
      if (post) {
          this.next();
      } else {
        this.render('404');
        
      }
    },
    data: function () {
      var post = Posts.findOne({ _id: this.params._id });
      return post;
    },
    /** Start of Dynamic SEO **/
    onAfterAction: function () {

      var jobData;

      if (!Meteor.isClient) {
        return;
      }

      jobData = this.data();

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

  Router.route('previewPostEdit', {
    path: '/:_id/preview/edit',
    waitOn: function () {
        return Meteor.subscribe('getPosts');
    },
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
    action: function () {
      if (this.ready()) {
        this.render();
      }
    },
    template: 'create-posting',
    layoutTemplate: 'main'
  });
});

Router.route('/:title/:_id', function () {
  this.render('job-posting', {
    data: function () {
      var post = Posts.findOne({ _id: this.params._id });
      return post;
    }
  });
  fastRender: true;
})

Router.route('/:_cat_id', function () {
  this.render('listByCategory', {
    data: function () {
      var title = this.params._cat_id;
      title = title.replace(/_/g, ' ');
      title = title.charAt(0).toUpperCase() + title.substring(1);
      var jobs = {
        jobs: Posts.find({ category: this.params._cat_id }),
        category: title
      };

      return jobs;
    }

  });
  fastRender: true;
})

Router.route('/(.*)', function () {
  this.render('404')
});

/* Static sitewide metadata, these will be attritbutes will be 
 * overwritten with Dynamic SEO data located in Router.map(), 
 * meta data that doesn't over write these default values like
 * og:image will be retained. 
 */
Meteor.startup(function () {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Remote Jobs - noOfficeNeeded',
      meta: {
        'description': 'Post your flexible JavaScript related jobs on No Office Needed free of charge today',
        'keywords': 'remote jobs, flexible jobs, work from home jobs, front end jobs, back end jobs, full stack jobs, design jobs',
        'robots':'index,follow'
      },
      og: {
        'description':'Post your flexible JavaScript related jobs on No Office Needed free of charge today',
        'image': Meteor.absoluteUrl() + 'logo.png',
        'image:type':'image/png',
        'type':'website'
      }
    });
  }
}); 

