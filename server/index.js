const express = require('express');
const cors = require('cors');
const port = 8083;
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
});
