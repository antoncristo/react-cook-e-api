import { QueryBasicParams } from 'api/types';
import { Recipe } from './recipes.type';

export interface GetRecipeParams extends QueryBasicParams {}

export interface RecipesServiceApi {
	getRecipes: (params: GetRecipeParams) => Promise<Recipe[]>;
	postRecipe: (recipePayload: Recipe) => Promise<Recipe>;
	deleteRecipe: (recipeToDelete: UUID) => Promise<UUID>;
}
