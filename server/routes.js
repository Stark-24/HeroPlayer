const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/heroPlayer')
  .get(controller.fetch)
  .post(controller.post)
  .delete(controller.delete)


module.exports = router;