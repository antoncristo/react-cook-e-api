import { randomUUID } from 'crypto';
import { Recipe } from './recipes.type';

export const recipes: Recipe[] = [
	{
		id: randomUUID(),
		title: 'Shnitzel overflowing text test overflowing text test overflowing text test',
		description:
			'Deep fried chicken breasts overflowing\n text test overflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text testoverflowing text test overflowing text test overflowing text test',
		ingredients: [
			{
				id: randomUUID(),
				name: 'Oil',
				amount: 1,
				unit: 'l'
			},
			{
				id: randomUUID(),
				name: 'Chicken breast',
				amount: 1,
				unit: 'kg'
			},
			{
				id: randomUUID(),
				name: 'Egg',
				amount: 1,
				unit: 'unit'
			},
			{
				id: randomUUID(),
				name: 'Breadcrumbs',
				amount: 1,
				unit: 'unit'
			},
			{
				id: randomUUID(),
				name: 'Mustard',
				amount: 60,
				unit: 'g'
			}
		],
		steps: [
			{
				id: randomUUID(),
				stepCount: 1,
				description: 'Cut the chicken breast into small semi flat square pieces'
			},
			{
				id: randomUUID(),
				stepCount: 2,
				description:
					'Soak the cubes in a mix of mustard,mayo,salt,pepper and eggs for ~1h'
			},
			{
				id: randomUUID(),
				stepCount: 3,
				description:
					'Prepare a breadcrumbs mix: breadcrumbs, chicken soup powder, smoked paprika, garlic powder'
			},
			{
				id: randomUUID(),
				stepCount: 4,
				description: 'Coat the soaked cubes with the breadcrumbs mix and cool for ~30mins'
			},
			{
				id: randomUUID(),
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
				id: randomUUID(),
				amount: 1,
				name: 'Beaf',
				unit: 'kg'
			}
		],
		steps: [
			{
				id: randomUUID(),
				description: 'Make it',
				stepCount: 1
			}
		]
	}
];
