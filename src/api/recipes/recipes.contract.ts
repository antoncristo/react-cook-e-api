import { QueryBasicParams } from 'api/types';
import { Recipe } from './recipes.type';

export interface GetRecipeParams extends QueryBasicParams {}

export interface RecipesServiceApi {
	getRecipes: (params: GetRecipeParams, userID: UUID) => Promise<Recipe[]>;
	getRecipe: (recipeID: UUID, userID: UUID) => Promise<Recipe | undefined>;
	postRecipe: (recipePayload: Recipe, userID: UUID) => Promise<Recipe>;
	deleteRecipe: (recipeToDelete: UUID, userID: UUID) => Promise<UUID>;
	putRecipe: (updatedRecipe: Recipe, userID: UUID) => Promise<Recipe>;
}
