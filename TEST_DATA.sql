DROP TABLE IF EXISTS reviews;
CREATE TABLE IF NOT EXISTS reviews(
   id           INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
   title        VARCHAR(50) NOT NULL,
   reviewer     VARCHAR(30) NOT NULL,
   rating       FLOAT(1)    NOT NULL,
   genre1       VARCHAR(12) NOT NULL,
   genre2       VARCHAR(12) NOT NULL,
   comment      varchar(100)
);

INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (1,'Lord of the Rings: The Fellowship of the Ring','Linus Öhrn','4','High Fantasy', 'Adventure','Stunning!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (2,'Lord of the Rings: The Two Towers','Linus Öhrn','4.5','High Fantasy', 'Adventure','Amazing!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (3,'Lord of the Rings: Return of the King','Linus Öhrn','5','High Fantasy', 'Adventure','Masterpieces!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (4,'Jurrasic Park','Linus Öhrn','4','Action', 'Thriller','Shocking!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (5,'The Lost Worlds: Jurassic Park','Linus Öhrn','3.5','Action', 'Thriller','Suspense!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (6,'Jurassic Park 3','Linus Öhrn','2.5','Action', 'Thriller','Let down...');

select * from reviews;