/* Date Format Helper */
 Template.registerHelper('fmtDate', function(date) {
   var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(date).toLocaleDateString('en-us',options);
});
