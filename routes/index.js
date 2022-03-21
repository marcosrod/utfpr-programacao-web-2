var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio', index: true, cv: false, disciplinas: false, midia: false});
});

router.get('/cv', function(req, res, next) {
  res.render('curriculo', { title: 'Curriculo', index: false, cv: true, disciplinas: false, midia: false});
}) 

router.get('/disciplinas', function(req, res, next) {
  res.render('disciplinas', { title: 'Disciplinas', index: false, cv: false, disciplinas: true, midia: false});
}) 

router.get('/midia', function(req, res, next) {
  res.render('midia', { title: 'Midia', index: false, cv: false, disciplinas: false, midia: true});
}) 

module.exports = router;
