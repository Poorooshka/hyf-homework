const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second)
app.get("/numbers/add", (req, res) => {
  const sum = Number(req.query.first) + Number(req.query.second);
  res.send(`${sum}`);
});

//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second
app.get("/numbers/multiply/:first/:second", (req, res) => {
  const mult = Number(req.params.first) * Number(req.params.second);
  res.send(`${mult}`);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
