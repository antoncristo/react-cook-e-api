import { Router } from 'express';
import { recipesRouter } from 'api/recipes';
import { authRouter } from 'api/auth';
import { authenticationCheck } from 'middleware';
import { preferencesRouter } from './preferences';

export const appRouter = Router();

appRouter.use('/auth', authRouter);
appRouter.use('/recipes', authenticationCheck, recipesRouter);
appRouter.use('/preferences', authenticationCheck, preferencesRouter);
