// Sample MongoClient wrapper code from MongoDB
// https://github.com/mongodb-university/atlas_starter_nodejs/blob/master/app.js

import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const app = express();
app.use(cors());

import User from "./user.js";
import Course from "./course.js";

let userCollection;
let courseCollection;

async function run() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri = process.env.DB_URL;

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "fiscal_fables_test";
  // const dbName = "fiscal_fables_prod";
  const collections = ["users", "courses"]

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  userCollection = database.collection(collections[0]);
  courseCollection = database.collection(collections[1]);

  console.log(userCollection)
  console.log(courseCollection)

  // Tells our app to listen to the given port
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  await client.close();
}

run().catch(console.dir);

app.get("/user/:user/email/:email", (req, res) => {
  // Access userId via: req.params.user
  // Access bookId via: req.params.email
  res.send(req.params);
});

/* Sample data values */

let courseData = [
  {
    courseID: 1234,
    courseName: "intro to finance",
    courseImage: "image.com",
    questions: [
      {
        questionsText: "What is your name?",
        coinValue: 100,
        correctIndex: 1,
        answers: [
          {
            text: "answer1",
          },

          {
            text: "answer2",
          },

          {
            text: "answer3",
          },

          {
            text: "answer4",
          },
        ],
      },
    ],
  },
];

let userData = [
  {
    name: "bill",
    email: "google",
    coins: 100,
    courses: [
      {
        id: "course1",
      },
    ],
  },
  {
    name: "anupritaa",
    email: "yahoo",
    coins: 200,
    courses: [
      {
        id: "course1",
      },
    ],
  },
  {
    name: "johnny",
    email: "hotmail",
    coins: 100,
    courses: [
      {
        id: "course1",
      },
    ],
  },
];

/* Example routes */

app.get("/login", (req, res) => {
  res.type("text");
  res.send("Hello, World!");
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
  console.log(req.params.username);
  // For example, check the table to make the user exists
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].name === req.params.username) {
      res.send({
        email: userData[i].email,
        coins: userData[i].coins,
        courses: userData[i].courses,
      });
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
  console.log(req.params.username);

  // Look in data for username
  // let result = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === req.params.username) {
      res.send({
        email: data[i].email,
        coins: data[i].coins,
      });
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
  console.log(req.params.courseID);

  //Look for course according to ID
  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].courseID == req.params.courseID) {
      res.send({
        courseImage: courseData[i].courseImage,
        questions: courseData[i].questions,
      });
    }
  }

  res.send({});

  res.send(req.params);
});

/**
 * getAnswer()
 * Parameters: TODO
 * Returns: TODO
 */
app.get("/courseID/:courseID/qNumber/:qNumber", (req, res) => {
  //Log parameters
  console.log(req.params.courseID);
  console.log(req.params.qNumber);

  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].questions == req.params.questions) {
      res.send({
        coinValue: courseData[i].coinValue,
        correctIndex: courseData[i].correctIndex,
      });
    }
  }

  res.send({});

  res.send(req.params);
});
