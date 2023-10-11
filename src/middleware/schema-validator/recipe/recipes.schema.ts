import { z } from 'zod';

// Fix: define conditions for minimum and maximum lengths.. https://trello.com/c/X37Z57yy
export const recipeSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(1),
	description: z.string().min(6),
	ingredients: z
		.array(
			z.object({
				id: z.string().uuid(),
				name: z.string().min(6),
				amount: z.coerce.number().gte(1),
				unit: z.string()
			})
		)
		.min(1),
	steps: z
		.array(
			z.object({
				id: z.string().uuid(),
				stepCount: z.coerce.number().gte(1),
				description: z.string().min(6)
			})
		)
		.min(1)
});
