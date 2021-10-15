import { Router } from 'express';
import helloController from './controllers/helloController';
import userController from './controllers/usersController';

const createRoutes = () =>{
    const routes = Router();

    routes.get('/',helloController.hello);
    routes.get('/hello',helloController.helloYou);
    routes.get('/getusers',userController.getAllUsers);
    routes.post('/adduser',userController.addUser);

    return routes;
}

export default createRoutes;