/** bookRoute.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */

//#region dependencies required for routing
const express = require('express');
const router = express.Router();
//#endregion dependencies required for routing


/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Student name: Johnny Z. Song<br>Student id: 301167073<br>Course: COMP229&nbsp;-&nbsp;SEC: 003',
    appname: 'The Favorite Book App<br><em>for Midterm W23 </em><br>'
   });
});

module.exports = router;
