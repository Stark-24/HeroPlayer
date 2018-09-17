const router = require('express').Router();
const controller = require('./controller.js');




router
  .route('/heroPlayer')
  .get(controller.fetch)


module.exports = router;