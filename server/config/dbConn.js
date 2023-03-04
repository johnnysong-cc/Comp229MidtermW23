/** dbConn.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.URI,
  { useNewUrlParser: true, useUnifiedtopology: true },
  (err) => {
    if (err) console.error("Error connecting to MongoDB:", err);
    else console.log('Connected to MongoDB.');
  });
mongoose.connection.on('error', console.error.bind(console, 'connection Error:'));

module.exports = mongoose;