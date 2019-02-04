const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
let app = express();

// Load views and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setting public folder for statis assets
app.use(express.static(path.join(__dirname, 'vendor')));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, (err) => {
  console.log('Server started on port 4000');
});