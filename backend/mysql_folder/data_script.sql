/*
insert data in books table
*/
INSERT INTO books_ranking.books (book_title, book_image, book_author, book_genres, book_year)
          VALUES ('Pride and prejudice', '/frontend/public/images/pride_and_prejudice_image.jpeg', 'Jane Austen', 'Drama', '1879');
INSERT INTO books_ranking.books (book_title, book_image, book_author, book_genres, book_year)
          VALUES ('Sense and Sensibility', '/frontend/public/images/sense_and_sensibility_image.jpeg', 'Jane Austen', 'Drama', '1879');
INSERT INTO books_ranking.books (book_title, book_image, book_author, book_genres, book_year)
          VALUES ('Cosmos', '/frontend/public/images/cosmos_image.jpeg', 'Carl Sagan', 'Science-Fiction', '1981')
          

/*
insert USERS 
*/
INSERT INTO books_ranking.users (user_name, user_email, user_password)
          VALUES ('Marc', 'marc@email.com', '12345')


/*
INSERT RATING
*/
INSERT INTO books_ranking.rating (users_user_id, books_book_id, rating)
          VALUES (1, 1, 2),
INSERT INTO books_ranking.rating (users_user_id, books_book_id, rating)
          VALUES (1, 1, 2),          

