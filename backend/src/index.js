
// ------------------------------
// LIBRARY IMPORTS
// ------------------------------

const express = require('express');
const cors = require('cors');
const path = require('path');


// ------------------------------
//VARIABLES CREATION
// ------------------------------



// ------------------------------
// EXPRESS CONFIGURATION
// ------------------------------

const app = express();
app.use(cors());
app.use(express.json());

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

const conn = getConnection();

if (!conn) {
    res.status(500).json({ success: false, error: 'Conection error' });

    return;
}
// ------------------------------
// ENDPOINTS API
// ------------------------------

// Books = {book_id:1, book_title:"", book_image:"", book_author:"", book_genres:"", book_year:""}
// GET    /api/books                                                    --> { info: {} results: [{}, {}] }
// POST   /api/books/book_id/user_id               <-- body={}          --> { success: true } or { success: false, error: 'there is no book related?' }
// PUT   /api/books/book_id/user_id/rating_id      <-- body={}          --> { success: true } or { success: false, error: 'the ranking couldn't be updated' }
// DELETE   /api/books/book_id/user_id/rating_id                        --> { success: true } or { success: false, error: 'the ranking couldn't be deleted' }


app.get('/books', async (req, res) => {
    // Select 
    console.log(req.query);

    res.json(data);

});

// ------------------------------
// ENDPOINTS DYNAMIC PAGES
// ------------------------------


app.post('/books', (req, res) => {
    //INSERT --> req.body

    console.log('ey! something is comming through POST');


    res.json({ success: true });
})


// ------------------------------
//  STATICS SERVER FOR REACT
// ------------------------------

app.use(express.static('./public.html'))
