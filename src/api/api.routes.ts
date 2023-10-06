import { Router } from 'express';
import { usersRouter } from 'api/example';
import { recipesRouter } from 'api/recipes';

export const appRouter = Router();

appRouter.use('/users', usersRouter);
appRouter.use('/recipes', recipesRouter);
