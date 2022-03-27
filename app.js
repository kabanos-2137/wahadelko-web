const express = require('express');
const session = require('express-session')
const path = require('path')
require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24}
}))

app.set('view engine', 'ejs');

app.get('/', ({ session }, res) => {
  res.render('index')
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

