var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
var helper = require("../javascripts/helpers");

var Landmark = function(){
  return knex('landmarks');
}


router.get("/", function(req,res){
   Landmark().select().then(function(payload){
     console.log('payload from landmark db:', payload);
     helper.readFiles(payload).then(function(fileContents) {
       console.log('fileContents:', fileContents);
       res.json(fileContents);
    });
  });
});

router.get("/:id", function(req,res){
   Landmark().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});

router.post("/", function(req, res) {
  Landmark().insert(req.body).then(function(result) {
    res.json({success:true});
  })
});


module.exports = router;
