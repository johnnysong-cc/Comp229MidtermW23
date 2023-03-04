/** sessionMgmt.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */
require("dotenv").config();
const session = require('express-session'), mongoSessionStore = require('connect-mongo');
const sessionConf = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: mongoSessionStore.create({
    mongoUrl: process.env.URI,
    ttl: 2 * 24 * 60 * 60 // default ttl is 1 day
  })
};

module.exports = session(sessionConf);