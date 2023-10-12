import { Router } from 'express';
import * as authController from './auth.controller';

export const authRouter = Router();

authRouter.route('/').get(authController.testAuth);
