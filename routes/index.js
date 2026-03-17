var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  var slideshowDir = path.join(__dirname, '..', 'images', 'slideshow');
  var bannerImages = fs.readdirSync(slideshowDir)
    .filter(function(f) { return /\.(jpe?g|png|gif|webp)$/i.test(f); })
    .map(function(f) { return '/images/slideshow/' + f; });
  res.render('index', { title: 'Express', bannerImages: bannerImages });
});

module.exports = router;
