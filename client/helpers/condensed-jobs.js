Template.condensedJobs.helpers({
  getCategories: function() {
    return UI._globalHelpers.categoryLookup()
  },
  isCategory: function(category) {
    var thatCategory = this.category,
        cat = category;

    return UI._globalHelpers.isEquivalent(thatCategory, cat)
  }
});
