const express = require('express');

const PORT = process.env.PORT || 7788;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello i use nodemon');
});

app.listen(PORT, () => { console.log(`started port: ${PORT}`); });