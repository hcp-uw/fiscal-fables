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

/** GET endpoint for sending back a Hello World message */
app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
});

app.get('/login', (req, res) => {
  res.type('text');
  res.send('Hello, World!');
  console.log(req);
});

app.get("/users/:user/emails/:email", (req, res) => {
  // Access userId via: req.params.user
  // Access bookId via: req.params.email
  res.send(req.params);
});

// Tells our app to listen to the given port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
