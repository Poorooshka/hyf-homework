const express = require("express");
const app = express();

const mealsRouter = require("./api/meals-router"); //importing meal route file
const reviewsRouter = require("./api/reviews-router");
const reservationsRouter = require("./api/reservations-router");

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/meals", mealsRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/reservations", reservationsRouter);

module.exports = app;
