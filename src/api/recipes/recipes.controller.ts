import { RequestHandler } from 'express';
import { recipesService } from './recipes.service';
import { QueryBasicParams } from 'api/types';
import { Recipe } from './recipes.type';

export const getRecipes: RequestHandler = async (req, res, next) => {
	try {
		const queryParams: QueryBasicParams = req.query;
		const recipes = await recipesService.getRecipes(queryParams);

		res.send(recipes);
	} catch (err) {
		return next(err);
	}
};

export const postRecipe: RequestHandler = async (req, res, next) => {
	try {
		const recipePayload = req.body.recipe as Recipe;
		const success = await recipesService.postRecipe(recipePayload);

		res.send(success);
	} catch (err) {
		return next(err);
	}
};

export const deleteRecipe: RequestHandler = async (req, res, next) => {
	try {
		const recipeIDToDelete = req.params.recipeid as UUID;
		const success = await recipesService.deleteRecipe(recipeIDToDelete);

		res.send({ deleted: success });
	} catch (err) {
		return next(err);
	}
};
