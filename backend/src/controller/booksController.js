// ------------------------------
//CONNECTION WITH MYSQL 
// ------------------------------

const getConnection = require('../db/db');


// ------------------------------
// ENDPOINTS API
// ------------------------------

// Books = {book_id:1, book_title:"", book_image:"", book_author:"", book_genres:"", book_year:""}
// GET    /api/books                                            --> { info: {} results: [{}, {}] }
// POST   /api/books/rating               <-- body={}           --> { success: true } or { success: false, error: 'there is no book related?' }
// PUT   /api/books/rating                <-- body={}           --> { success: true } or { success: false, error: 'the ranking couldn't be updated' }
// DELETE   /api/books/rating                                   --> { success: true } or { success: false, error: 'the ranking couldn't be deleted' }


const getAllBooks = async (req, res) => {

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }

    let selectQuery = 'SELECT b.book_id, b.book_title, b.book_author, AVG(r.rating) rating FROM books b LEFT JOIN rating r ON (b.book_id = r.books_book_id) group by b.book_id, b.book_title, b.book_author';
    const selectValues = [];

    const [results] = await conn.query(selectQuery, selectValues);

    res.json(results);

    conn.close();

}

// ------------------------------
// ENDPOINTS API - ADD BOOKS RANKING
// ------------------------------

const addRatingBook = async (req, res) => {

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }

    const [results, columns] = await conn.execute(
        `INSERT INTO rating (users_user_id, books_book_id, rating)
          VALUES (?, ?, ?)` ,
        [req.body.users_user_id, req.body.books_book_id, req.body.rating]);

    console.log(results);

    res.json({
        success: true,
        id: results.insertId,
        message: 'Rating successfully added!'
    });


    conn.close();
}

// ------------------------------
// ENDPOINTS API - UPDATE BOOK RANKING
// ------------------------------

const updateBookRating = async (req, res) => {

    console.log(req.body);

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }


    const [results] = await conn.execute(
        `UPDATE rating
        SET rating=?
        WHERE users_user_id=? AND books_book_id=?`,
        [req.body.rating, req.body.users_user_id, req.body.books_book_id]
    );

    console.log(results);


    if (results.affectedRows === 1) {
        res.status(200).json({
            success: true,
            id: results.insertId,
            message: 'Rating successfully updated!'
        });
    }
    else {

        res.json({
            success: false
        });
    }

    conn.close();
}

// ------------------------------
// ENDPOINTS API - DELETE BOOKS RANKING
// ------------------------------

const deleteBookRating = async (req, res) => {

    console.log(req.body);

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }

    const [results] = await conn.execute(
        `DELETE FROM rating
            WHERE users_user_id=? AND books_book_id=?`,
        [req.body.users_user_id, req.body.books_book_id]
    );

    console.log(results);


    if (results.affectedRows === 1) {
        res.status(204).json({
            success: true
        });
    }
    else {
        // Si no, devuelvo success: false

        res.json({
            success: false
        });
    }

}


module.exports = {
    getAllBooks,
    addRatingBook,
    updateBookRating,
    deleteBookRating
}
