import { ZodError } from 'zod';
import { CookError, ErrorType, typeToCodeMap } from './types';

export const cookErrorBuilder = (type: ErrorType, msg: string) => {
	const err = new CookError(typeToCodeMap[type], msg);

	return err;
};

export const errorHandler = (type: ErrorType, err: unknown) => {
	if (err instanceof ZodError) {
		return cookErrorBuilder(type, JSON.stringify((err as ZodError).format()));
	}
	return cookErrorBuilder(type, JSON.stringify(err));
};
