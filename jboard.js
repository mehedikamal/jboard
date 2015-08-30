
// Used in lib/routes.js and other files
Posts = new Mongo.Collection('jobs')

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

