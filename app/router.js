'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getDB', controller.home.getDB);
  router.post('/addDB', controller.home.addDB);
  router.put('/updateDB/:id', controller.home.updateDB);
  router.delete('/removeDB/:id', controller.home.removeDB);
};
