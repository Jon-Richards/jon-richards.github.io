const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/test', express.static(path.join(__dirname, 'test')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

