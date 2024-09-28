const getConnection = require('../db/db');


const getAllBooks = async (req, res) => {

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }

    let selectQuery = 'SELECT b.book_id, b.book_title, b.book_author, r.rating FROM books b INNER JOIN rating r WHERE b.book_id = r.books_book_id';
    const selectValues = [];

    const [results] = await conn.query(selectQuery, selectValues);

    res.json(results);

    conn.close();

}

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

const updateBookRating = async (req, res) => {

    console.log(req.body);

    const conn = await getConnection();

    if (!conn) {
        res.status(500).send('System failed');
        return;
    }

    // Preparo y ejecuto el UPDATE  -> results

    const [results] = await conn.execute(
        `UPDATE rating
        SET rating=?
        WHERE users_user_id=? AND books_book_id=?`,
        [req.body.rating, req.body.users_user_id, req.body.books_book_id]
    );

    console.log(results);

    // Si ha afectado a 1 fila, devuelvo success: true

    if (results.affectedRows === 1) {
        res.status(200).json({
            success: true,
            id: results.insertId,
            message: 'Rating successfully updated!'
        });
    }
    else {
        // Si no, devuelvo success: false

        res.json({
            success: false
        });
    }

    conn.close();
}

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
