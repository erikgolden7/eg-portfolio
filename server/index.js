const express = require('express');
const { json } = require('body-parser');
const cookieParser = require('cookie-parser');
const port = 8083;

const app = (module.exports = express());

app.use(json());
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log(`listening to port: ${port}`);
});
