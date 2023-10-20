import { RecipesServiceApi, GetRecipeParams } from './recipes.contract';
import { Recipe } from './recipes.type';
import { FirebaseDatabaseProvider } from 'firebase/db';

class RecipesService implements RecipesServiceApi {
	private dbProvider = new FirebaseDatabaseProvider();

	getRecipes = async (params: GetRecipeParams, userID: UUID): Promise<Recipe[]> => {
		const dbRecipes = await this.dbProvider.recipes.getRecipes(userID);
		let res: Recipe[] = dbRecipes;

		if (params.search) {
			res = dbRecipes.filter(
				recipe =>
					recipe.title.toLowerCase().includes(params.search!.toLowerCase()) ||
					recipe.description.toLowerCase().includes(params.search!.toLowerCase())
			);
		}

		return Promise.resolve(res);
	};

	getRecipe = async (recipeID: UUID, userID: UUID): Promise<Recipe | undefined> => {
		const recipe = await this.dbProvider.recipes.getRecipe(recipeID, userID);

		return Promise.resolve(recipe);
	};

	postRecipe = async (recipePayload: Recipe, userID: UUID): Promise<Recipe> => {
		await this.dbProvider.recipes.addRecipe(recipePayload, userID);

		return Promise.resolve(recipePayload);
	};

	deleteRecipe = async (recipeToDelete: UUID, userID: UUID): Promise<UUID> => {
		await this.dbProvider.recipes.deleteRecipe(recipeToDelete, userID);

		return Promise.resolve(recipeToDelete);
	};

	putRecipe = async (updatedRecipe: Recipe, userID: UUID): Promise<Recipe> => {
		await this.dbProvider.recipes.updateRecipe(updatedRecipe, userID);

		return Promise.resolve(updatedRecipe);
	};
}

export const recipesService = new RecipesService();
