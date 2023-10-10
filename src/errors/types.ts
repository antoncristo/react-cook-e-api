export type ErrorType = 'BAD_REQUEST' | 'INTERNAL_ERROR';
export type ErrorCode = 400 | 500;

export interface CookError {
	statusCode: ErrorCode;
	msg: ErrorType | string;
}

export const typeToCodeMap: Record<ErrorType, ErrorCode> = {
	BAD_REQUEST: 400,
	INTERNAL_ERROR: 500
};
