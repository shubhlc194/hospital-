const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle appointment booking form submission
app.post('/book-appointment', (req, res) => {
  const { name, email, date, time } = req.body;
  // Here you can add code to save the appointment details to a database
  console.log(`Appointment booked: ${name}, ${email}, ${date}, ${time}`);
  res.send('Appointment booked successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
