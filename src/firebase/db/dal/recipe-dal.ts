import { Recipe } from 'api/recipes/recipes.type';
import { db } from '../admin';

const ROOT_COLLECTION = 'user-recipes';
const RECIPES_COLLECTION = 'recipes';

export class RecipeDal {
	private admin = db;

	async addRecipe(recipe: Recipe, userID: string) {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.collection(RECIPES_COLLECTION)
			.doc(recipe.id)
			.set(recipe);
	}

	async getRecipes(userID: string): Promise<Recipe[]> {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.collection(RECIPES_COLLECTION)
			.get()
			.then(snapshot => {
				const recipes: Recipe[] = [];
				snapshot.forEach(rec => recipes.push(rec.data() as Recipe));
				return recipes;
			})
			.then(arr => arr);
	}

	async getRecipe(recipeID: UUID, userID: UUID): Promise<Recipe | undefined> {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.collection(RECIPES_COLLECTION)
			.doc(recipeID)
			.get()
			.then(snapshot => {
				return snapshot.data() as Recipe;
			});
	}

	async deleteRecipe(recipeID: string, userID: string) {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.collection(RECIPES_COLLECTION)
			.doc(recipeID)
			.delete();
	}

	async updateRecipe(recipe: Recipe, userID: string) {
		return this.admin
			.collection(ROOT_COLLECTION)
			.doc(userID)
			.collection(RECIPES_COLLECTION)
			.doc(recipe.id)
			.update({ ...recipe });
	}
}
