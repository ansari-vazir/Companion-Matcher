const express = require("express");
const router = express.Router();
const { getUserByName, getAllUsers } = require("../data/userData");


function sharedInterests(user1, user2) {
  const set1 = new Set(user1.interests);
  return user2.interests.filter(interest => set1.has(interest)).length;
}

function findMatches(user, allUsers) {
  return allUsers.filter(
    u => u.name.toLowerCase() !== user.name.toLowerCase() &&
         sharedInterests(u, user) >= 2
  );
}


router.get("/:username", (req, res) => {
  const user = getUserByName(req.params.username);
  if (!user) return res.status(404).json({ error: "User not found" });

  const matches = findMatches(user, getAllUsers());
  res.json(matches);
});

module.exports = router;