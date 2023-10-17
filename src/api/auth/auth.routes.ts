import { Router } from 'express';
import { authenticationCheck } from 'middleware';
import * as authController from './auth.controller';

export const authRouter = Router();

authRouter.route('/register').post(authController.registerNewUser);
authRouter.route('/sign-in').post(authController.signInWithEmailAndPassword);
authRouter.route('/user').get(authenticationCheck, authController.getUserFromToken);
