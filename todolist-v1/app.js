const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const port = 3000;

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = ["Working Out"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("list", { listTitle: date.getDate(), newListItems: items });
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "work", newListItems: workItems });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, (req, res) => {
  console.log("Server is running on " + port);
});

const today = () => {
  const date = new Date().getDay();

  let day = "";
  switch (date) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to " + date);
  }

  return day;
};
