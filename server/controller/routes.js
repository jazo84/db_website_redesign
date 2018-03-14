var express = require('express');
var path = require('path');

var router = express.Router();

var models = require('./../models');
models.sequelize.sync();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/api/cases-alerts', (req,res) => {
	models.Cases.findAll({order: [
    ['id', 'ASC']
	]}).then(function(cases){
	  res.json(cases);
	});
});

router.get('/api/blog', (req,res) => {
	models.Blog.findAll({order: [
    ['id', 'ASC']
	]}).then(function(blog){
	  res.json(blog);
	});
});

router.get('/api/inthenews', (req,res) => {
	models.Media.findAll({order: [
    ['id', 'ASC']
	]}).then(function(media){
	  res.json(media);
	});
});

router.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
