const Landing = require('../models/landing');

// SHOW Landing
exports.getLanding = function(req,res,next){
  Landing.findOne({title:'Ardent'},function(err,Landing){
    if(err){return next(err)}
    res.status(200).json({Landing})
  })
}
