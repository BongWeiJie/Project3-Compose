import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('My Student ID is 19121806. Welcome to Express'); # Originally res.render('index', { title: 'World' });
});

export default router;
