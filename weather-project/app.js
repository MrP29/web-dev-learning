const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { log } = require("console");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const city = req.body.cityName;
  const appid = "appid"; // removed for public
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q= " +
    city +
    "&appid=" +
    appid +
    "&units=" +
    unit;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + description + ".</p>");
      res.write(
        "<h1>The temperatur in " + city + " is " + temp + " Celcius.</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(port, (req, res) => {
  console.log("Server is on " + port);
});
