const express = require("express");
const router = express.Router();

const menu = [
  { flavor: "strawberry", price: "$3.50" },
  { flavor: "chocolate fudge", price: "$4" },
  { flavor: "Classic Vanilla", price: "$3" },
  { flavor: "Cookies & Cream", price: "$4.50" },
  { flavor: "Lemon Sorbet", price: "$3.75" },
  { flavor: "Sundae Special", price: "$5.50" },
];

router.get("/", (req, res) => {
  res.json(menu);
});

module.exports = router;