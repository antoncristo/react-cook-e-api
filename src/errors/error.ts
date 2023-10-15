import { ZodError } from 'zod';
import { CookError, ErrorName, typeToCodeMap } from './types';
import { AxiosError } from 'axios';

export const cookErrorBuilder = (type: ErrorName, msg: string) => {
	const err = new CookError(typeToCodeMap[type], msg);

	return err;
};

export const errorHandler = (type: ErrorName, err: unknown) => {
	if (err instanceof ZodError) {
		return cookErrorBuilder(type, JSON.stringify((err as ZodError).format()));
	}
	if (err instanceof AxiosError) {
		return cookErrorBuilder(type, JSON.stringify((err as AxiosError).response?.data));
	}
	if (err instanceof CookError) {
		return err;
	}

	return cookErrorBuilder(type, JSON.stringify(err));
};
