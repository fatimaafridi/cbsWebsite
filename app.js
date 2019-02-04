const express = require('express');
const path = require('path');
const mysql = require('mysql');
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

// Database connections 
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cbs'
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  let register = {name: req.body.name, phone: req.body.phone, email: req.body.email, regnum: req.body.message};
  let sql = 'INSERT INTO registrations SET ?';
  db.query(sql, register, (err, result) => {
    if(err) throw err;
    res.send('Registrations added!');
  });
});

app.listen(4000, (err) => {
  console.log('Server started on port 4000');
});