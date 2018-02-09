const express = require('express');
const router = express.Router();
const Portfolio = require('../controllers/portfolio');

router.route('/all/:page')
  .get(Portfolio.getAllPortfolio)


module.exports = router
