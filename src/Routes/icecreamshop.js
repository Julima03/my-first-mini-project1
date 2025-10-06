const express = require("express");
const router = express.Router();
const {
  createIcecreamshop,
  getIcecreamshops,
  removeIcecreamshops,
  updateIcecreamshopAction,
} = require("../Controllers/icecreamshopController");

router.get("/", (req, res) => { 
  res.json(getIcecreamshops());
});

// create ice cream shops
router.post("/", (req, res) => {
  const body = req.body;
  const newIcecreamshop = createIcecreamshop(body);
  res.json(newIcecreamshop);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const isDeleted = removeIcecreamshops(id);
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedIcecreamshop = updateIcecreamshopAction(id, body);
  if (updatedIcecreamshop) {
    res.json(updatedIcecreamshop);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;