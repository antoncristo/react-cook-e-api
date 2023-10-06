import { Router } from 'express';
import * as recipesController from './recipes.controller';

export const recipesRouter = Router();

recipesRouter.route('/').get(recipesController.getRecipes);
recipesRouter.route('/').post(recipesController.postRecipe);
recipesRouter.route('/:recipeid').delete(recipesController.deleteRecipe);
