const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

//Respond with the json for all the reviews

router.get("/", async (request, response) => {
  try {
    console.log(request.query); // all the requests with ? come here
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    const reviewsWithId = reviews.filter(
      (meal) => meal.id === parseInt(request.params.id) //all the requests with / come here
    );
    console.log(request.params);
    response.json(reviewsWithId[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
