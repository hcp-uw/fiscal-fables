import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import User from './user.js';
import Course from './course.js';

// Get URL to mongo deployment
// const dotenvObj = dotenv.config()
const mongoURL = dotenv.config().parsed.DB_URL;

// Mongoost declaration
mongoose.set("strictQuery", false);

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Express declarations

// const express = require('express');
// const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());

// Create two sample collections

const firstUser = new User({
  name: 'Marnel'
});
const firstCourse = new Course({
  title: 'Biggest Banks'
})

// Insert the article in our MongoDB database
await firstUser.save();
await firstCourse.save();

// const anyUser = await User.findOne([]);
// console.log(anyUser);

/* Sample data values */

let courseData = [
  {
    courseID: 1234,
    courseName: "intro to finance",
    courseImage: "image.com",
    questions: [
      {questionsText: "What is your name?",
      coinValue: 100,
      correctIndex: 1,
      answers: [
        {
          text: answer1
        },

        {
          text: answer2
        },

        {
          text: answer3
        },

        {
          text: answer4
        }
      ]}
        
    ]
    }
];

let userData = [
  {
    name: "bill",
    email: "google", 
    coins: 100,
    courses: [{
      course1
    }
    ]
  },
  {
    name: "anupritaa", 
    email: "yahoo", 
    coins: 200,
    courses: [{
      course1
    }
    ]
  }, 
  {
    name: "johnny",
    email: "hotmail",
    coins: 100,
    courses: [{
      course1
    }
    ]
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
  


  // Get data from database
  console.log(req.params.username)
  // For example, check the table to make the user exists
  for(let i = 0; i < userData.length; i++ ){
    if(userData[i].name === req.params.username){
      res.send({
        email: userData[i].email,
        coins: userData[i].coins,
        courses: userData[i].courses
      })
    }
  }
  // ... Do some computation

  // Return the requested data
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

  //Log parameters
  console.log(req.params.courseID)

  //Look for course according to ID
  for(let i = 0; i < courseData.length; i++){
    if(courseData[i].courseID == req.params.courseID){
      res.send({
        courseImage: courseData[i].courseImage,
        questions: courseData[i].questions
      })
    }
  }

  res.send({})
  
  res.send(req.params);
});

/**
 * getAnswer()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/courseID/:courseID/qNumber/:qNumber", (req, res) => {

  //Log parameters
  console.log(req.params.courseID)
  console.log(req.params.qNumber)

  for(let i = 0; i < courseData.length; i++){
    if(courseData[i].questions == req.params.questions){
      res.send({
        coinValue: courseData[i].coinValue,
        correctIndex: courseData[i].correctIndex
      })
    }
  }

  res.send({})

  res.send(req.params);
});


// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
