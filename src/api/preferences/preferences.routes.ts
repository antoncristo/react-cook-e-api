import { Router } from 'express';
import * as preferencesController from './preferences.controller';

export const preferencesRouter = Router();

preferencesRouter.route('/').get(preferencesController.getPreferences);
preferencesRouter.route('/').put(preferencesController.updatePreferences);
