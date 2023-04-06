const router = require("express").Router();
const db = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  res.json(db);
});

router.post("/api/notes", (req, res) => {
  req.body.id = uuidv4();
  console.log(req.body);
  db.push(req.body);
  res.json(db);
  fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

router.delete("/api/notes", (req, res) => {
  const params = [req.params.id];
  console.log(params);
});

module.exports = router;
