import { z } from 'zod';

export const userSchema = z.object({
	uuid: z.string().uuid(),
	name: z.string().min(1),
	email: z.string().email()
});
