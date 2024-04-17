const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(cors());

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
