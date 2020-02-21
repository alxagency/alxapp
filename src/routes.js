import { Router } from 'express';
import BullBoard from 'bull-board';
import UserController from './app/controllers/UserController';

const routes = Router();



// Users Routes
routes.get('/users', UserController.index); //List all users
routes.post('/users', UserController.store); // Create users


// BullBoard Routes
routes.use('/admin/queues', BullBoard.UI);


module.exports = routes;