# Book Rating API
This project is a simple Node.js-based API that allows users to manage book ratings. The API is built using Express.js and connects to a MySQL database. The project structure allows users to create, read, update, and delete (CRUD) book ratings, as well as retrieve book data with their average ratings.

## Project Structure

```txt
book-rating-api/
├── db/
│ └── db.js # MySQL connection setup
├── data/
│ └── books.json # Sample book data (optional)
├── routes/
│ └── booksRoutes.js # API routing for books
├── controllers/
│ └── booksController.js # Controller for handling books' API requests
├── public/
│ └── index.html # Public folder (for static files or frontend)
├── index.js # Main server file
├── package.json # Project dependencies and scripts
└── README.md # Project documentation
```

## Setup

Set up your MySQL database and update the MySQL connection details in db/db.js:

```js
const mysql = require('mysql2/promise');

const getConnection = async () => {
return await mysql.createConnection({
host: 'localhost',
user: 'yourUsername',
password: 'yourPassword',
database: 'book_db',
});
};

module.exports = getConnection;
```

## API Endpoints

1. GET /api/books
   Retrieve all books along with their average ratings.

   Example Request:
   ```bash
   curl -X GET http://localhost:4000/api/books
   ```

   Response:
   ```json
[
{
"book_id": 1,
"book_title": "Book Title 1",
"book_author": "Author 1",
"rating": 4.5
}
]
   ```

2. POST /api/books/rating
   Add a new rating for a book.

Request Body:
{
"users_user_id": 1,
"books_book_id": 1,
"rating": 5
}

Example Response:
{
"success": true,
"id": 101,
"message": "Rating successfully added!"
}

3. PUT /api/books/rating
   Update an existing rating for a book.

Request Body:
{
"users_user_id": 1,
"books_book_id": 1,
"rating": 4
}

Example Response:
{
"success": true,
"message": "Rating successfully updated!"
}

4. DELETE /api/books/rating
   Delete a rating for a book by a user.

Request Body:
{
"users_user_id": 1,
"books_book_id": 1
}

Example Response:
{
"success": true
}

## Database Schema

To use this API, you’ll need the following MySQL database structure:
CREATE TABLE books (
book_id INT AUTO_INCREMENT PRIMARY KEY,
book_title VARCHAR(255),
book_image VARCHAR(255),
book_author VARCHAR(255),
book_genres VARCHAR(255),
book_year INT
);

CREATE TABLE rating (
rating_id INT AUTO_INCREMENT PRIMARY KEY,
users_user_id INT,
books_book_id INT,
rating INT,
FOREIGN KEY (books_book_id) REFERENCES books(book_id)
);

## Usage
To interact with the API, you can use tools like Postman or curl commands from the terminal.

Here is an example curl command to retrieve all books:
curl -X GET http://localhost:4000/api/books
