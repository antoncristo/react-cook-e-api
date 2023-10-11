import { Router } from 'express';
import * as recipesController from './recipes.controller';
import { schemaValidator } from 'middleware';

export const recipesRouter = Router();

recipesRouter.route('/').get(recipesController.getRecipes);
recipesRouter.route('/').post(schemaValidator('RECIPE'), recipesController.postRecipe);
recipesRouter.route('/').put(schemaValidator('RECIPE'), recipesController.putRecipe);
recipesRouter.route('/:recipeid').delete(recipesController.deleteRecipe);
