import { Router } from 'express';
import * as usersController from './users.controller';

export const usersRouter = Router();

usersRouter.route('/').get(usersController.getUsers);
