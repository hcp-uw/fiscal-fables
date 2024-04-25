// Declare mongoose
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

// Get URL to mongo deployment
const dotenv = require('dotenv').config()
const mongoURL = dotenv.parsed.DB_URL;

const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());

/* Sample data values */

let courseData = [
  {
    courseID: 1234,
    courseImage: "image.com",
    questions: [
      {questionsText: "What is your name?",
      coinValue: 100,
      answers: [
        {
          isCorrect: false,
          text: 'answer1'
        },

        {
          isCorrect: false,
          text: 'answer2'
        },

        {
          isCorrect: false,
          text: 'answer3'
        },

        {
          isCorrect: true,
          text: 'answer4'
        }
      ]}
        
    ]
    }
];

let userData = [
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

/* Example routes */

app.get('/login', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
  // console.log(req);
});

app.get("/user/:user/email/:email", (req, res) => {
  // Access userId via: req.params.user
  // Access bookId via: req.params.email
  res.send(req.params);
});

/* Main Routes */

/**
 * loadApp()
 * Parameters: 
 * - username(string)
 * Returns:
 * - email(string)
 * - coins(string)
 * - courses(array of courses)
 */
app.get("/username/:username", (req, res) => {
  res.send(req.params);

  // Get data from database

  // For example, check the table to make the user exists

  // ... Do some computation

  // Return the requested data
  res.send({
    email: "",
    coins: 100, 
    courseData: []
  })
});

/**
 * refreshProfile()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/username/:username", (req, res) => {
  // Fetch data from database
  
  // Log param for debugging
  console.log(req.params.username)
  
  // Look in data for username
  // let result = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === req.params.username) {
      res.send({
        email: data[i].email,
        coins: data[i].coins
      })
    }
  }

  // Else, return null
  res.send({});
});

/**
 * refreshHome()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/home", (req, res) => {
  res.send(req.params);
});

/**
 * getCourses()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/courses", (req, res) => {
  res.send(req.params);
});

/**
 * getUserLogin()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/username/:username/email/:email/password/:password", (req, res) => {

  res.send(req.params);
});

/**
 * getCourseById()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/courseID/:courseID", (req, res) => {

  //Fetch courses data

  
  res.send(req.params);
});

/**
 * getAnswer()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/courseID/:courseID/qNumber/:qNumber", (req, res) => {
  res.send(req.params);
});


// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
