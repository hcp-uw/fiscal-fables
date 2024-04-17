const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());

/** GET endpoint for sending back a Hello World message */
app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
  // console.log(req.params.Email);
});

app.get('/login', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
  console.log(req);
});

// Example route
app.get("/user/:user/email/:email", (req, res) => {
  // Access userId via: req.params.user
  // Access bookId via: req.params.email
  res.send(req.params);
});

// loadApp()
app.get("/username/:username", (req, res) => {
  res.send(req.params);
});

// refreshProfile()
app.get("/username/:username", (req, res) => {
  // Fetch data from database
  let data = [
    {
      name: "bill",
      email: "google", 
      coins: 100
    }, 
    {
      name: "anupritaa", 
      email: "yahoo", 
      coins: 200
    }, 
    {
      name: "johnny",
      email: "hotmail",
      coins: 100
    }
  ];

  // Log param for debugging
  console.log(req.params.username)
  
  // Look in data for username
  let result = {};
  if (data[0].name === req.params.username) {
    // For each, check for matching username and return
    res.send({
      email: "",
      coins: ""
    });
  } else {
    res.send({});
  }
});

// refreshHome()
app.get("/home", (req, res) => {
  res.send(req.params);
});

// getCourses()
app.get("/courses", (req, res) => {
  res.send(req.params);
});

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
