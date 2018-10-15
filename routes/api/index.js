const router = require("express").Router();
const articleRoutes = require("./article.js");

// Book routes
router.use("/articles", articleRoutes);

module.exports = router;
