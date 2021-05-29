const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

//Respond with the json for all the reservations
router.get("/", async (request, response) => {
  try {
    console.log(request.query); // all the requests with ? come here
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  try {
    const reservationsWithId = reservations.filter(
      (meal) => meal.id === parseInt(request.params.id) //all the requests with / come here
    );
    console.log(request.params);
    response.json(reservationsWithId[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
