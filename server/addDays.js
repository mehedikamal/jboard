/* Extends the JS Date object to add days to the current date */
Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};