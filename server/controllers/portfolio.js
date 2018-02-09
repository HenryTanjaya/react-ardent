const Portfolio = require('../models/portfolio');
const moment = require('moment');
// SHOW Landing
exports.getAllPortfolio = function(req,res,next){
    var perPage=6;
    var page = req.params.page - 1;
    var filter = false;
    Portfolio.find({}).sort({date:'descending'}).skip(perPage*page).limit(perPage).exec(function(err,allPortfolio){
        if(err){
            res.status(200).json({err})
        }
        else {
            Portfolio.count().exec(function(err,count){
                if(err){
                    res.status(200).json({err})
                  } else {
                    res.status(400).json({portfolios:allPortfolio,pages:count/perPage,moment:moment,count:count,filter:filter});
                }
            })
        }
    })
}

module.exports= exports;
