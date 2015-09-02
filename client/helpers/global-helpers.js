/* Date Format Helper */
 Template.registerHelper('fmtDate', function(date) {
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-us',options);
});

/* Pretty Strings */
Template.registerHelper('prettyStrings', function(string) {
  string = string.replace(/_/g, ' ');
  string = string.replace(/(<([^>]+)>)/ig, "");
  string = string.charAt(0).toUpperCase() + string.substring(1);

  return string
})

/* Category Lookup */
Template.registerHelper('categoryLookup', function() {
  if (Session.get('cat') === undefined) {
    Meteor.call('listByCategory', function(err, res) {
      Session.set('cat', res)
    })
  }
  return Session.get('cat')
})

/* Value Checker */
Template.registerHelper('isEquivalent', function(val1, val2) {
  if (val1 === val2) {
    return true;
  }
})
