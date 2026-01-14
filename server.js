const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const server = express();
const db = new sqlite3.Database("./Reviews.db");

/* Sätter konfiguration på servern */
server
  /* Data ska kommuniceras i JSON-format */
  .use(express.json())
  /* Sättet som data ska kodas och avkodas på */
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Display all reviews
server.get("/reviews", (req, res) => {
  const sql = "SELECT * FROM reviews";

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

// Display review of given ID
server.get("/reviews/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM reviews WHERE id=${id}`;

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows[0]);
    }
  });
});

// Adds review with given data
server.post("/reviews", (req, res) => {
  const review = req.body;

  const sql =
    "INSERT INTO reviews(title,reviewer,rating,genre1,genre2,comment) VALUES (?,?,?,?,?,?)";

  db.run(sql, Object.values(review), (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`Your review of ${review.title} has been added!`);
    }
  });
});

// Updates review at given ID
server.put("/reviews", (req, res) => {
  const bodyData = req.body;
  const id = bodyData.id;

  const review = {
    Title: bodyData.title,
    Reviewer: bodyData.reviewer,
    Rating: bodyData.rating,
    Genre1: bodyData.genre1,
    Genre2: bodyData.genre2,
    Comment: bodyData.comment,
  };

  let updatedString = "";
  const columsArray = Object.keys(review);

  columsArray.forEach((column, i) => {
    updatedString += `${column}="${review[column]}"`;
    if (i !== columsArray.length - 1) updatedString += ",";
  });

  const sql = `UPDATE reviews SET ${updatedString} WHERE id = ${id}`;

  db.run(sql, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`Your review of ${review.Title} has been updated!`);
    }
  });
});

// Removes review at given ID
server.delete("/reviews/:id", (req, res) => {
  const id = req.params.id;

  db.all(`SELECT * FROM reviews WHERE id=${id}`, (err, row) => {
    if (err) {
      res.status(500).send(err);
    }
    db.run(`DELETE FROM reviews WHERE id = ${id}`, (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
    res.json(row);
  });
});
