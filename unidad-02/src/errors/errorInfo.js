import { EErrors } from './EErrors.js';

export function errorInfo(err) {
  switch (err.code) {
    case EErrors.INVALID_PARAM:
      return { code: err.code, message: err.message ?? 'Invalid parameter', cause: err.cause };
    case EErrors.VALIDATION_ERROR:
      return { code: err.code, message: err.message ?? 'Validation error', cause: err.cause };
    case EErrors.NOT_FOUND:
      return { code: err.code, message: err.message ?? 'Not found', cause: err.cause };
    default:
      return { code: EErrors.INTERNAL_ERROR, message: 'Internal server error' };
  }
}
