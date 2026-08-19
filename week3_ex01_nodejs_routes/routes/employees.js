const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "This is the GET employees route" });
});

router.post("/", (req, res) => {
  res.json({
    message: "This is the POST employees route, a new employee was added",
    receivedData: req.body,
  });
});

router.put("/", (req, res) => {
  res.json({ message: "This is the PUT employees route, an employee was fully updated" });
});

router.patch("/", (req, res) => {
  res.json({ message: "This is the PATCH employees route, an employee was partially updated" });
});

router.delete("/", (req, res) => {
  res.json({ message: "This is the DELETE employees route, an employee was removed" });
});

module.exports = router;
