const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); // To parse JSON request bodies

// In-memory data (for simplicity, you could use a JSON file or database later)
let proverbs = [
  { id: 1, textDari: "یک مثل فارسی", textPashto: "یو مثل پښتو", translationEn: "A Persian proverb", meaning: "Meaning here", category: "wisdom" },
  // Add more proverbs here
];

// Routes

// GET all proverbs
app.get('/proverbs', (req, res) => {
  res.json(proverbs);
});

// GET a proverb by ID
app.get('/proverbs/:id', (req, res) => {
  const { id } = req.params;
  const proverb = proverbs.find(p => p.id === parseInt(id));
  if (!proverb) {
    return res.status(404).send('Proverb not found');
  }
  res.json(proverb);
});

// POST a new proverb
app.post('/proverbs', (req, res) => {
  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  const newProverb = {
    id: proverbs.length + 1, // Incremental ID for simplicity
    textDari, 
    textPashto, 
    translationEn, 
    meaning, 
    category
  };
  proverbs.push(newProverb);
  res.status(201).json(newProverb);
});

// PUT (Update) a proverb by ID
app.put('/proverbs/:id', (req, res) => {
  const { id } = req.params;
  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  
  const proverb = proverbs.find(p => p.id === parseInt(id));
  if (!proverb) {
    return res.status(404).send('Proverb not found');
  }

  proverb.textDari = textDari || proverb.textDari;
  proverb.textPashto = textPashto || proverb.textPashto;
  proverb.translationEn = translationEn || proverb.translationEn;
  proverb.meaning = meaning || proverb.meaning;
  proverb.category = category || proverb.category;

  res.json(proverb);
});

// DELETE a proverb by ID
app.delete('/proverbs/:id', (req, res) => {
  const { id } = req.params;
  const index = proverbs.findIndex(p => p.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).send('Proverb not found');
  }

  const deletedProverb = proverbs.splice(index, 1);
  res.json(deletedProverb[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`Afghan Proverbs API listening at http://localhost:${port}`);
});