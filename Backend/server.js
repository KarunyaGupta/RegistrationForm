const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

let registrationData = []; 

// Route for handling form submission
app.post('/data', (req, res) => {

  console.log(req.body)

  const { fname, lname, email, mobile, gender, password } = req.body;
  // Store registration data
  registrationData.push({ fname, lname, email, mobile, gender, password });
  res.json({ message: 'Registration successful!' });
});

app.get('/registrations', (req, res) => {
  res.json(registrationData); 
});

app.listen(3200, () => console.log(`Server listening on port 3200`));