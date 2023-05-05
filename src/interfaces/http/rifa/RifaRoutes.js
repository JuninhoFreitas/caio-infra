const { Router } = require("express");
const router = Router();
const rifaController = require("./RifaController");

router.post("/", rifaController.createPost);

module.exports = router;
