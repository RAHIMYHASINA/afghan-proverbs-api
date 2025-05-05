// index.js
const express = require('express');
const bodyParser = require('body-parser');
const proverbsRoutes = require('./routes/proverbs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.use('/proverbs', proverbsRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Afghan Proverbs API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});