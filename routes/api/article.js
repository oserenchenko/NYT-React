const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .delete(articlesController.remove);

//main html page
router.get('/*', function (req, res) {
  res.sendFile("../../client/public/index.html");
});

module.exports = router;
