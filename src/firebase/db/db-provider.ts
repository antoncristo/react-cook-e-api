import { Recipe } from 'api/recipes/recipes.type';
import { db } from './admin';

export class FirebaseDatabaseProvider {
	private admin = db;

	async addRecipe(recipe: Recipe, userID: string) {
		return this.admin
			.collection('users')
			.doc(userID)
			.collection('recipes')
			.doc(recipe.id)
			.set(recipe);
	}

	async getRecipes(userID: string) {
		return this.admin
			.collection('users')
			.doc(userID)
			.collection('recipes')
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
			.collection('users')
			.doc(userID)
			.collection('recipes')
			.doc(recipeID)
			.get()
			.then(snapshot => {
				return snapshot.data() as Recipe;
			});
	}

	async deleteRecipe(recipeID: string, userID: string) {
		return this.admin
			.collection('users')
			.doc(userID)
			.collection('recipes')
			.doc(recipeID)
			.delete();
	}

	async updateRecipe(recipe: Recipe, userID: string) {
		return this.admin
			.collection('users')
			.doc(userID)
			.collection('recipes')
			.doc(recipe.id)
			.update({ ...recipe });
	}
}
