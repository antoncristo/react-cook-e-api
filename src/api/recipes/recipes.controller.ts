import { RequestHandler } from 'express';
import { AuthenticatedRequest, QueryBasicParams } from 'api/types';
import { CookError } from 'errors';
import { recipesService } from './recipes.service';
import { Recipe } from './recipes.type';

export const getRecipes: RequestHandler = async (req, res, next) => {
	try {
		const queryParams: QueryBasicParams = req.query;
		const user = (req as AuthenticatedRequest).user;

		const recipes = await recipesService.getRecipes(queryParams, user.uuid);

		res.send(recipes);
	} catch (err) {
		return next(err);
	}
};

export const postRecipe: RequestHandler = async (req, res, next) => {
	try {
		const recipePayload = req.body.recipe as Recipe;
		const user = (req as AuthenticatedRequest).user;

		const success = await recipesService.postRecipe(recipePayload, user.uuid);

		res.send(success);
	} catch (err) {
		return next(err);
	}
};

export const deleteRecipe: RequestHandler = async (req, res, next) => {
	try {
		const recipeIDToDelete = req.params.recipeid as UUID;
		const user = (req as AuthenticatedRequest).user;

		const success = await recipesService.deleteRecipe(recipeIDToDelete, user.uuid);

		res.send({ deleted: success });
	} catch (err) {
		return next(err);
	}
};

export const putRecipe: RequestHandler = async (req, res, next) => {
	try {
		const updatedRecipe = req.body.recipe as Recipe;
		const user = (req as AuthenticatedRequest).user;

		const success = await recipesService.putRecipe(updatedRecipe, user.uuid);

		res.send(success);
	} catch (err) {
		res.status((err as CookError).statusCode).send((err as CookError).msg);
	}
};
