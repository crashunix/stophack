const express = require('express');
const routes = express.Router();

const WordGroupController = require('./controllers/WordGroupController');
const WordController = require('./controllers/WordController');
const HackController = require('./controllers/HackController');

routes.get('/wordgroups', WordGroupController.index);
routes.get('/wordgroups/:id', WordGroupController.show);
routes.post('/wordgroups', WordGroupController.store);
routes.put('/wordgroups/:id', WordGroupController.update);
routes.delete('/wordgroups/:id', WordGroupController.destroy);

routes.get('/words', WordController.index);
routes.get('/words/:id', WordController.show);
routes.post('/words', WordController.store);
routes.put('/words/:id', WordController.update);
routes.delete('/words/:id', WordController.destroy);

routes.post('/hack', HackController.batota);

module.exports = routes;