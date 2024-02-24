const router = require("express").Router();

const { getTest, postAnswer } = require("../controllers/gptController");

router.route("/").post(postAnswer).get(getTest);

module.exports = router;
