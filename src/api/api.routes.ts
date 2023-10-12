import { Router } from 'express';
import { usersRouter } from 'api/example';
import { recipesRouter } from 'api/recipes';
import { authRouter } from 'api/auth';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/users', usersRouter);
appRouter.use('/recipes', recipesRouter);
