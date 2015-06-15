
module.exports = {

  categoriesModel: null,

  schema: function (mongoose) {

    console.log('inside schema');

      var categoriesSchema = new mongoose.Schema({
        id: {type: Number, unique: true},
        title: String,
        position: {type: Number, unique: true},
        show: {type: String, default: 'Y'},
        updated_at: { type: Date, default: Date.now },
      });

      return mongoose.model('categories', categoriesSchema);;

  },
  getAll: function (mongoose) {

    var categoriesList = [];

    var categoriesModel = this.schema(mongoose);

    categoriesModel.find({}, function(err, categories){
      categoriesList = JSON.stringify(categories);

    });

    console.log(categoriesList);
    return categoriesList;

  },

  getTitle: function(mongoose, id){

  }
};
