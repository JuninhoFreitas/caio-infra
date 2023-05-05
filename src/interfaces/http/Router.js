const { Router } = require("express");
const router = Router();

const rifaRoutes = require('./rifa/RifaRoutes');

router.use('rifa/', rifaRoutes)

module.exports = router;
