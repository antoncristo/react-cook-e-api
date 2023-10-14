import { CookError, ErrorType, typeToCodeMap } from './types';

export const cookErrorBuilder = (type: ErrorType, msg: string) => {
	const err = new CookError(typeToCodeMap[type], msg);

	return err;
};
