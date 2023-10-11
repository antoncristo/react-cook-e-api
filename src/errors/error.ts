import { CookError, ErrorType, typeToCodeMap } from './types';

export const cookErrorBuilder = (type: ErrorType, msg: string) => {
	const err: CookError = {
		statusCode: typeToCodeMap[type],
		msg: `[${type}][${typeToCodeMap[type]}]:: ${msg}`
	};

	return err;
};
