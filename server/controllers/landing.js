const Landing = require('../models/landing');

// SHOW Landing
exports.getLanding = function(req,res,next){
  Landing.findOne({title:'Ardent'},function(err,Landing){
    if(err){return next(err)}
    res.status(200).json({Landing})
  })
}

exports.updateLanding = function(req,res,next){
  Landing.findOneAndUpdate({title:'Ardent'},req.body, function(err, updatedLanding){
        if(err){
            res.status(400).json({message:err});
        } else {
            res.status(200).json({Landing:req.body});
        }
    });
}

module.exports= exports;
