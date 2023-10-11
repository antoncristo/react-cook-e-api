export type ErrorType = 'BAD_REQUEST' | 'INTERNAL_ERROR' | 'NOT_FOUND';
export type ErrorCode = 400 | 404 | 500;

export interface CookError {
	statusCode: ErrorCode;
	msg: ErrorType | string;
}

export const typeToCodeMap: Record<ErrorType, ErrorCode> = {
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
	INTERNAL_ERROR: 500
};
