
// ------------------------------
// LIBRARY IMPORTS
// ------------------------------

const express = require('express');
const cors = require('cors');
const path = require('path');

const bookRouter = require('./routes/booksRoutes');


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
//  STATICS SERVER FOR REACT
// ------------------------------

app.use(express.static('./public.html'))
