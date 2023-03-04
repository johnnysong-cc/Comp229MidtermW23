/** bookModel.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */

const mongoose = require('mongoose');
const findorcreate = require('mongoose-findorcreate');
// create a model class
const bookSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Price: Number,
  Author: String,
  Genre: String
},{
  collection: "books"
});
bookSchema.plugin(findorcreate);

module.exports = mongoose.model('Book', bookSchema);
