const mongoose = require("mongoose");
const Landing = require("./models/landing");
const Portfolio = require("./models/portfolio");
var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        numberofservice:4,
        services:["a","a","a","b"],
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-1998",
        image_slideshow:["https://www.typewolf.com/assets/img/sotd/2016-04-11.png","https://www.typewolf.com/assets/img/sotd/2016-04-11.png"]
    },
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        numberofservice:4,
        services:["a","a","a","b"],
        video:"https://www.youtube.com/embed/5YL_dOgEGVw?vq=hd720",
        host:"Ardent",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date:"05-23-1998",
        image_slideshow:["https://www.typewolf.com/assets/img/sotd/2016-04-11.png","https://www.typewolf.com/assets/img/sotd/2016-04-11.png"]
    }
]

var dataLanding = {
      title:"Ardent",
      imagetitle:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagevision:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagemission:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagevalues:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      imagecontact:"https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      featuredname:["a","b","c"],
      featuredimage:["a","b","c"],
      featureddate:["a","b","c"],
      featuredlink:["a","b","c"]
    }


function seedDB(){
   //Remove all portfolio
   Portfolio.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed portfolio");
         //add a few portfolio
        data.forEach(function(seed){
            Portfolio.create(seed, function(err, portfolio){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a portfolio");
                }
            });
        });
    });

    Landing.remove({}, function(err){
         if(err){
             console.log(err);
         }
         console.log("removed landing");
          //add a few portfolio
             Landing.create(dataLanding, function(err, landing){
                 if(err){
                     console.log(err)
                 } else {
                     console.log("added a landing");
                 }
             });
     });

}

module.exports = seedDB;
