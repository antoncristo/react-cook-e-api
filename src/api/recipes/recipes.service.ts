import { RecipesServiceApi, GetRecipeParams } from './recipes.contract';
import { Recipe } from './recipes.type';

const UNDEFINED_INDEX = -1;
let recipes: Recipe[] = [];

class RecipesService implements RecipesServiceApi {
	getRecipes = (params: GetRecipeParams): Promise<Recipe[]> => {
		let res: Recipe[] = recipes;

		if (params.search) {
			res = recipes.filter(
				recipe =>
					recipe.title.toLowerCase().includes(params.search!.toLowerCase()) ||
					recipe.description.toLowerCase().includes(params.search!.toLowerCase())
			);
		}

		return Promise.resolve(res);
	};

	postRecipe = (recipePayload: Recipe): Promise<Recipe> => {
		recipes.push(recipePayload);

		return Promise.resolve(recipePayload);
	};

	deleteRecipe = (recipeToDelete: UUID): Promise<UUID> => {
		recipes = recipes.filter(r => r.id !== recipeToDelete);

		return Promise.resolve(recipeToDelete);
	};

	putRecipe = (updatedRecipe: Recipe): Promise<Recipe> => {
		let indexToUpdate = UNDEFINED_INDEX;
		let updateRef = recipes.find((r, i) => {
			if (r.id === updatedRecipe.id) {
				indexToUpdate = i;
				return true;
			}
		});

		if (indexToUpdate !== UNDEFINED_INDEX) {
			updateRef = JSON.parse(JSON.stringify({ ...updateRef, ...updatedRecipe }));
			recipes[indexToUpdate] = updateRef!;

			return Promise.resolve(recipes[indexToUpdate]);
		} else {
			// Fix: error handler
			return Promise.resolve(updatedRecipe);
		}
	};
}

export const recipesService = new RecipesService();
