const express = require("express");
const router = express.Router();
const { addNewUser } = require("../data/userData");

router.post("/", (req, res) => {
  const { name, age, interests } = req.body;
  if (!name || !age || !Array.isArray(interests)) {
    return res.status(400).json({ error: "Invalid user data" });
  }
  addNewUser({ name, age, interests });
  res.status(201).json({ message: "User added successfully" });
});

module.exports = router;