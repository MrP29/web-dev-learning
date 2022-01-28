const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "mail service providers url is needed"; // removed due to sensitive data
  const options = {
    method: "POST",
    auth: "authentication key is needed" // removed due to sensitive data
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      // res.send("Successfully subscribed!");
      res.sendFile(__dirname + "/success.html");
    } else {
      // res.send("There was an error with signing up, please try again!");
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log("Server is running on port " + port);
});