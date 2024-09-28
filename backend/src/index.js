
// ------------------------------
// LIBRARY IMPORTS
// ------------------------------

const express = require('express');
const cors = require('cors');
const path = require('path');

const bookRouter = require('./routes/booksRoutes');


// ------------------------------
//VARIABLES CREATION
// ------------------------------



// ------------------------------
// EXPRESS CONFIGURATION
// ------------------------------

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRouter);

const port = 4000;
const data = require('./data/books.json');


// ------------------------------
// MySQL CONNECTION
// ------------------------------
const mysql = require('mysql2/promise');
const getConnection = require('./db/db');


// ------------------------------
// LET'S START SERVER
// ------------------------------

// Server listening
app.listen(port, () => {
    console.log(`server initiate in http://localhost:${port}`);
});

// ------------------------------
//CONNECTION WITH MYSQL 
// ------------------------------


// ------------------------------
// ENDPOINTS API
// ------------------------------

// Books = {book_id:1, book_title:"", book_image:"", book_author:"", book_genres:"", book_year:""}
// GET    /api/books                                                    --> { info: {} results: [{}, {}] }
// POST   /api/books/book_id/user_id               <-- body={}          --> { success: true } or { success: false, error: 'there is no book related?' }
// PUT   /api/books/book_id/user_id/rating_id      <-- body={}          --> { success: true } or { success: false, error: 'the ranking couldn't be updated' }
// DELETE   /api/books/book_id/user_id/rating_id                        --> { success: true } or { success: false, error: 'the ranking couldn't be deleted' }






// ------------------------------
// ENDPOINTS DYNAMIC PAGES
// ------------------------------




// ------------------------------
//  STATICS SERVER FOR REACT
// ------------------------------

app.use(express.static('./public.html'))
