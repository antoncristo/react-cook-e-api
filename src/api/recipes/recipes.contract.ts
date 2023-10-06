import { QueryBasicParams } from 'api/types';
import { Recipe } from './recipes.type';

export interface GetRecipeParams extends QueryBasicParams {}

export interface RecipesServiceApi {
	getRecipes: (params: GetRecipeParams) => Promise<Recipe[]>;
}