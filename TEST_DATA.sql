DROP TABLE IF EXISTS reviews;
CREATE TABLE IF NOT EXISTS reviews(
   id           INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
   title        VARCHAR(50) NOT NULL,
   reviewer     VARCHAR(30) NOT NULL,
   rating       REAL    NOT NULL,
   genre1       VARCHAR(12) NOT NULL,
   genre2       VARCHAR(12) NOT NULL,
   comment      varchar(100)
);

INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (1,'Lord of the Rings: The Fellowship of the Ring','Linus Öhrn','8','High Fantasy', 'Adventure','Stunning!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (2,'Lord of the Rings: The Two Towers','Linus Öhrn','9','High Fantasy', 'Adventure','Amazing!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (3,'Lord of the Rings: Return of the King','Linus Öhrn','10','High Fantasy', 'Adventure','Masterpieces!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (4,'Jurrasic Park','Linus Öhrn','8','Action', 'Thriller','Shocking!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (5,'The Lost Worlds: Jurassic Park','Linus Öhrn','5','Action', 'Thriller','Suspense!');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (6,'Jurassic Park 3','Linus Öhrn','4','Action', 'Thriller','Let down...');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (200,'Rubber','John Movielover','10','Dark Fantasy', 'Dark Comedy','I LOVE THIS MOVIE'); 
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (201,'Un chien andalou','Jean Cinématographe','7','Short film', 'Surreal','Le film le good');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (202,'Dude Bro Party Massacre III','Jim Moviehater','1','Horror', 'Comedy','I hate this movie >:(');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (203,'Kung Fu Hustle','XiaoKing37','10','Comedy', 'Martial Arts','Very good'); 
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (204,'The Lighthouse','adwdwadahjvbS132','2','Psychological Horror', 'Thriller','this movie suxxxx');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (205,'Freddie Got Fingered','Jerry ovieenjoyer','5','Comedy', 'Dark Comedy','You either love it or hate it');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (206,'IT','JesusLovesYou<3','1','Horror','Adventure', 'DO NOT WATCH THIS MOVIE IT IS SATANIC AND WILL DESTROY YOU');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (207,'The 13th Warrior','SickPanda4','6','Action','Historical','I think this movie is really cool');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (208,'Django','Iforgor','5','Action','Western','I did not see it');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (100,'The ShawShank Redemption','Viggo Mikaelsson','10','Drama','Prison Break', 'Fantastic');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (101,'Dunderklumpen','Viggo Mikaelsson','7','Musical','Adventure','Fun');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (102,'The Wolf Of Wall Street','Viggo Mikaelsson','8','Biographical','Dark Comedy','Interesting');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (103,'dude wheres my car','Viggo Mikaelsson','9','Stoner Comedy','Adventure','Hilarious');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (104,'La La Land','Viggo Mikaelsson','10','Musical','Drama','Amazing');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (105,'My Little Pony: Equestria Girls','Viggo Mikaelsson','5','Musical','Fantasy','Decent');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (106,'Cats','Viggo Mikaelsson','1','Musical','Fantasy','Terrible');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (107,'Superman (2025)','Viggo Mikaelsson','7','Action','Superhero','Great');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (108,'Five Nights At Freddys','Viggo Mikaelsson','4','Horror','Supernatural','Meh');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (109,'Thor: The Dark World','Viggo Mikaelsson','3','SuperHero','Action','Bad');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (110,'Death Note','Viggo Mikaelsson','2','Supernatural','Thriller','Awful');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (300,'Lord of the Rings: The Return of the King','Jennifer Back','10','High Fantasy','Adventure','A timeless and epic adventure to enjoy with friends.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (301,'Jurassic World','Jennifer Back','8','Dinosaur Adventure','Action','Thrilling action with dinosaurs – what else do you need?.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (302,'Secret Window','Jennifer Back','9','Psychological Thriller','Mystery','A mysterious and thrilling film with amazing cast.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (303,'The Ninth Gate','Jennifer Back','10','Psychological Thriller', 'Mystery','If you like Johnny Depp you will know this as one of his greater roles. Great and mysterious paranormal film.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (304,'Inception','Jennifer Back','9,5','Psychological Thriller','Sci-Fi','This film will knock you over by its production and story.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (305,'Jack and Jill','Jennifer Back','2,5','Comedy','Family','Just strange and not one of of Sandler´s best.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (306,'Bullet Train','Jennifer Back','5','Action', 'Comedy','A bit long-winded and dry.');
INSERT INTO reviews(id,title,reviewer,rating,genre1,genre2,comment) VALUES (307,'Barbie Fairytopia: Mermaidia', 'Jennifer Back','2','Animation','Fantasy','A weird fever dream I would not show my kids.');

select * from reviews;