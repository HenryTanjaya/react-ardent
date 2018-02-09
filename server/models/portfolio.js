const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
   name: {
        type : String,
        required:"Name cannot be blank!"
      },
   image: {
        type : String,
        required:"Image cannot be blank!"
      },
   numberofservice: {
        type : Number,
        required:"Service number cannot be blank!"
      },
   services: [{
        type : String,
        required:"Services cannot be blank!"
      }],
   video: {
        type : String,
      },
   date: {
        type : Date,
        required:"Event date cannot be blank!"
      },
   host: {
        type : String,
        required:"Host cannot be blank!"
      },
   desc: {
        type : String,
        required:"Desc cannot be blank!"
      },
   image_slideshow: [{
        type: String
      }]
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
