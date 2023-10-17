export type ErrorName = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'INTERNAL_ERROR';
export type ErrorCode = 400 | 401 | 404 | 500;

export class CookError {
	statusCode: ErrorCode;
	msg: ErrorName | string;

	constructor(_sc: ErrorCode, _msg: ErrorName | string) {
		this.statusCode = _sc;
		this.msg = `[${_sc}]:: ${_msg}`;
	}
}

export const typeToCodeMap: Record<ErrorName, ErrorCode> = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	INTERNAL_ERROR: 500
};
