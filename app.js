const express = require('express');
// const router = require('./modules/router');

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', 'views'); 
app.use(express.static(__dirname +'/assets'));

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.get('/gallery', function (req, res) {
  res.render('gallery.ejs')
})

app.get('/generic', function (req, res) {
  res.render('generic.ejs')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})