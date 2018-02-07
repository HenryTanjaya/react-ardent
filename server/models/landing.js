const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
   title:String,
   imagetitle:String,
   imagevision:String,
   imagemission:String,
   imagevalues:String,
   imagecontact:String,
   featuredname:[{
        type: String
      }],
   featuredimage:[{
        type: String
      }],
   featureddate:[{
        type: String
      }],
   featuredlink:[{
     type: String
      }],
});

const Landing = mongoose.model("Landing", landingSchema);
module.exports = Landing;
