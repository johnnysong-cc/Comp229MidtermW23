/** bookRoute.js
 * Student name: Johnny Z. Song
 * Student id: 301167073
 * March 3, 2023
 * App: Favorite Book MidtermW23
 * ============================== */

// modules required for routing
const express = require('express');
const router = express.Router();

// define the book model
const Book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  Book.find((err, books) => {
    if (err)
      return console.error(err);
    else {
      console.log()
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });
});

// GET the Book Details page in order to add a new Book
// POST process the Book Details page and create a new Book - CREATE
router.route('/add')
  .get((req, res, next) => {
    res.render("books/details", {
      title: "Add a book by filling up the form:",
      books: { "Title": "", "Price": "", "Author": "", "Genre": "" }
    });
  })
  .post(async (req, res, next) => {
    let addedBook;
    // debugger;
    try {
      addedBook = await Book.create({
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre,
      });
      console.log(`Successfully added a book named ${addedBook.Title}.`);
      res.redirect('/books');
    } catch (err) {
      console.error(`Failed to add a book due to an error: ${err}`)
      res.end(err);
    }
  });

// GET the Book Details page in order to edit an existing Book
// POST - process the informatino passed from the details form and update the document
router.route('/edit/:id')
  .get((req, res, next) => {
    Book.findById(req.params.id, (err, thebook) => {
      if (err) return next(err);
      else {
        console.log(thebook);
        res.render("books/details", {
          title: "Edit book information in the form below:",
          books: {
            "Title": thebook.Title,
            "Price": thebook.Price,
            "Author": thebook.Author,
            "Genre": thebook.Genre
          }
        });
      }
    });
  })
  .post((req, res, next) => {
    // const updatedBook = ;
    Book.updateOne(
      { _id: req.params.id },
      new Book({
        "_id": req.params.id,
        "Title": req.body.title,
        "Price": req.body.price,
        "Author": req.body.author,
        "Genre": req.body.genre,
      }),
      (err) => {
        if (err) return next(err);
        else res.redirect('/books');
      });
  });

// GET - process the delete by user id
router.get('/delete/:id', async (req, res, next) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.redirect('/books');
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

module.exports = router;