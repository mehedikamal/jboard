/* Date Format Helper */
 Template.registerHelper('fmtDate', function(date) {
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-us',options);
});

/* Pretty Strings */
Template.registerHelper('prettyStrings', function(string) {
  string = string.replace(/_/g, ' ');
  string = string.charAt(0).toUpperCase() + string.substring(1);

  return string
})
