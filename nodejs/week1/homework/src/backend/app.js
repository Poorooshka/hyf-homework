const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

//Adding a function to get the reviews for every meal
function getReviews() {
  meals.forEach((meal) => {
    meal.reviews = reviews.filter((review) => meal.id === review.mealId);
    meal.reviews.forEach((review) => delete review.mealId);
  });
  return meals;
}

//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
function getCheapMeals() {
  const mealsWithReviews = getReviews();
  const cheapMealsWithReviews = mealsWithReviews.filter(
    (meal) => meal.price < 40
  );
  return cheapMealsWithReviews;
}

//Respond with the json for all the meals (including it's reviews) that can fit lots of people
function getLargeMeals() {
  const mealsWithReviews = getReviews();
  const largeMealsWithReviews = mealsWithReviews.filter(
    (meal) => meal.maxNumberOfGuests > 5
  );
  return largeMealsWithReviews;
}

//Respond with the json for a random meal (including it's reviews)
function getRandomMeal() {
  const mealsWithReviews = getReviews();
  let randomMeal =
    mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
  return randomMeal;
}

//Respond with the json for all reservations
function getAllReservations() {
  return reservations;
}

//Respond with the json for a random reservation
function getRandomReservation() {
  return reservations[Math.floor(Math.random() * reservations.length)];
}

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.send(getReviews());
});

app.get("/cheap-meals", async (request, response) => {
  response.send(getCheapMeals());
});

app.get("/large-meals", async (request, response) => {
  response.send(getLargeMeals());
});

app.get("/meal", async (request, response) => {
  response.send(getRandomMeal());
});

app.get("/reservations", async (request, response) => {
  response.send(getAllReservations());
});

app.get("/reservation", async (request, response) => {
  response.send(getRandomReservation());
});

module.exports = app;
