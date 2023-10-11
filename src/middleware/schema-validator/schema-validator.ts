import { Recipe } from 'api/recipes/recipes.type';
import { RequestHandler } from 'express';
import { recipeValidator } from './recipe/recipe-validator';

type SchemaType = 'RECIPE';

export const schemaValidator =
	(schema: SchemaType): RequestHandler =>
	(req, res, next) => {
		switch (schema) {
			case 'RECIPE':
				const recipe = req.body.recipe as Recipe;
				if (recipeValidator(recipe, res)) {
					next();
				}
				break;
			default:
				next();
				break;
		}
	};
