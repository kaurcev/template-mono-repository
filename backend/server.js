const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 6769;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});