const express = require('express');
const router = express.Router();
const Landing = require('../controllers/landing');

router.route('/')
  .get(Landing.getLanding)


module.exports = router
