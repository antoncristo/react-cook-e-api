import { randomUUID } from 'crypto';
import { RecipesServiceApi, GetRecipeParams } from './recipes.contract';
import { Recipe } from './recipes.type';

let recipes: Recipe[] = [
	{
		id: randomUUID(),
		title: 'Shnitzel overflowing text test overflowing text test overflowing text test',
		description:
			'Deep fried chicken breasts overflowing\n text test overflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text test',
		ingredients: [
			{
				id: '1-1-1-1',
				name: 'Oil',
				amount: 1,
				unit: 'l'
			},
			{
				id: '1-1-1-2',
				name: 'Chicken breast',
				amount: 1,
				unit: 'kg'
			},
			{
				id: '1-1-1-3',
				name: 'Egg',
				amount: 1,
				unit: 'unit'
			},
			{
				id: '1-1-1-4',
				name: 'Breadcrumbs',
				amount: 1,
				unit: 'unit'
			},
			{
				id: '1-1-1-5',
				name: 'Mustard',
				amount: 60,
				unit: 'g'
			}
		],
		steps: [
			{
				id: '1-1-1-1',
				stepCount: 1,
				description: 'Cut the chicken breast into small semi flat square pieces'
			},
			{
				id: '1-1-1-2',
				stepCount: 2,
				description:
					'Soak the cubes in a mix of mustard,mayo,salt,pepper and eggs for ~1h'
			},
			{
				id: '1-1-1-3',
				stepCount: 3,
				description:
					'Prepare a breadcrumbs mix: breadcrumbs, chicken soup powder, smoked paprika, garlic powder'
			},
			{
				id: '1-1-1-4',
				stepCount: 4,
				description: 'Coat the soaked cubes with the breadcrumbs mix and cool for ~30mins'
			},
			{
				id: '1-1-1-5',
				stepCount: 5,
				description: 'Deep fry until golden'
			}
		]
	},
	{
		id: randomUUID(),
		title: 'Bologniez',
		description: 'Spaghetti with beef and tomato sauce overflowing text test',
		ingredients: [
			{
				id: '1-2-1-1',
				amount: 1,
				name: 'Beaf',
				unit: 'kg'
			}
		],
		steps: [
			{
				id: '1-1-1-1',
				description: 'Make it',
				stepCount: 1
			}
		]
	}
];

class RecipesService implements RecipesServiceApi {
	getRecipes(params: GetRecipeParams): Promise<Recipe[]> {
		let res: Recipe[] = recipes;

		if (params.search) {
			res = recipes.filter(
				recipe =>
					recipe.title.toLowerCase().includes(params.search!.toLowerCase()) ||
					recipe.description.toLowerCase().includes(params.search!.toLowerCase())
			);
		}

		return Promise.resolve(res);
	}
}

export const recipesService = new RecipesService();
