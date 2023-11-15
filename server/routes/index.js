var express = require("express");
var router = express.Router();
const { getPokemons } = require("../controllers/pokemons");

router.get("/", async function (req, res, next) {
  const pokemons = await getPokemons();
  res.status(202).send(pokemons);
});

module.exports = router;
