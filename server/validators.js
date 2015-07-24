Meteor.methods({
      validateEmail: function (email) {
        // trim spaces
        email =  email.replace(/^\s+|\s+$/g, "");
        reg = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        return reg.test(email);
      }
});
