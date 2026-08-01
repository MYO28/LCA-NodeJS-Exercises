const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "This is the GET products route" });
});

router.post("/", (req, res) => {
  res.json({
    message: "This is the POST products route, a new product was added",
    receivedData: req.body,
  });
});

router.put("/", (req, res) => {
  res.json({ message: "This is the PUT products route, a product was fully updated" });
});

router.patch("/", (req, res) => {
  res.json({ message: "This is the PATCH products route, a product was partially updated" });
});

router.delete("/", (req, res) => {
  res.json({ message: "This is the DELETE products route, a product was removed" });
});

module.exports = router;
