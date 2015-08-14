var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get Heatmap data */
router.get('/server/', function(req, res,next) {
  var db = req.db;
    var collection = db.get('mouseTrack');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });  
});

/* Post Heatmap Data */
router.post('/server', function(req, res) {
  var db = req.db;
  
});

module.exports = router;
