var express = require('express');
var router = express.Router();

const user = require('../models/useSchema')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/register-user',async function(req, res, next) {

  try {
    const newuser = new user(req.body);
    await newuser.save();
    res.redirect("/login")


  } catch (error) {
    console.log(error)
  }
  
  
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
