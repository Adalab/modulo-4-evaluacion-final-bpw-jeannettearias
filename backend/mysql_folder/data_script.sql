/*
insert data in books table
*/
INSERT INTO books_ranking.authors (author_name, author_birthdate, author_date_of_death) 
VALUES ('Carl Sagan', '1934-11-09', '1996-12-20');
INSERT INTO books_ranking.authors (author_name, author_birthdate, author_date_of_death) 
VALUES ('Patrick Süskind', '1949-03-26', null);


/*
insert data in genres table
*/
INSERT INTO books_ranking.genres (genre_name) VALUES ('science fiction');
INSERT INTO books_ranking.genres (genre_name) VALUES ('drama');
INSERT INTO books_ranking.genres (genre_name) VALUES ('comedia');
INSERT INTO books_ranking.genres (genre_name) VALUES ('terror');
INSERT INTO books_ranking.genres (genre_name) VALUES ('suspense');
INSERT INTO books_ranking.genres (genre_name) VALUES ('null');
/*
UPDATE
*/
UPDATE `books_ranking`.`genres` SET  `genre_name` = 'horror' WHERE (`genre_id` = '6');



