const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./utils/DataBaseUtils");

const config = require("../etc/config");

db.setUpConnection();

app.use( bodyParser.json() );

app.use(cors({ origin: "*" }));

app.get("/notes", (req, res) => {
  db.listNotes().then(data => res.send(data));
});

app.post("/notes", (req, res) => {
  db.createNote(req.body).then(data => res.send(data));
});

app.delete("/notes/:id", (req, res) => {
  db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(config.serverPort, function() {
  console.log(`Server is up and running on port ${config.serverPort}`);
});



//app.use(bodyParser.json());

//app.use((req, res) => {
//   //res.append("Access-Control-Allow-Origin", ["*"]);
//   //res.append("Access-Control-Allow-Headers", "Content-Type");
//});

// app.get("/notes", (req, res) => {
//   console.log("get");
//   db.listNotes().then(data => res.send(data));
// });
//
// app.post("/notes", (req, res) => {
//   console.log("post");
//   db.createNote(req.body).then(data => res.send(data));
// });
//
// app.delete("/notes", (req, res) => {
//   console.log("delete");
//   db.deleteNote(req.params.id).then(data => res.send(data));
// });
//
// const server = app.listen(config.serverPort, () => {
//   console.log(`Server is up and running on port ${config.serverPort}`);
// });


