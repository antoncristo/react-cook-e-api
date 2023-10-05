import { Router } from 'express';
import { usersRouter } from 'api/example';

export const appRouter = Router();

appRouter.use('/users', usersRouter);
