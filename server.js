const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const server = express();

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
// -------------------------------------------------------------------------------------------
// DB Test
server.get("/db", (req, res) => {
  console.log("Test from DB");

  // Swap :memory: for table name if not testing
  const db = new sqlite3.Database(":memory:");

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS greetings (message TEXT)");
    db.run("INSERT INTO greetings (message) VALUES (?)", ["Hej, SQLITE!"]);
  });
  console.log("TABLE CREATED");

  db.all("SELECT message FROM greetings", (err, row) => {
    res.send(row);
    db.close();
  });
});
// -------------------------------------------------------------------------------------------

server.get("/xxx", (req, res) => {
  // GET: Hämta alla xxx
});
server.put("/xxx", (req, res) => {
  // PUT: updatera xxx
});
server.post("/xxx", (req, res) => {
  // POST: Skapa xxx
});
server.delete("/xxx/:id", (req, res) => {
  // DELETE: Ta bort xxx med ID
});
