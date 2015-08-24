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

});
