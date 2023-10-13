import { Router } from 'express';
import * as authController from './auth.controller';

export const authRouter = Router();

authRouter.route('/register').post(authController.registerNewUser);
authRouter.route('/sign-in').post(authController.signInWithEmailAndPassword);
