import { EErrors } from './EErrors.js';

export class CustomError extends Error {
  constructor({ name = 'CustomError', message, cause, code = EErrors.INTERNAL_ERROR, status = 500 }) {
    super(message);
    this.name = name;
    this.cause = cause;
    this.code = code;
    this.status = status;
  }

  static create({ message, cause, code, status, name }) {
    return new CustomError({ message, cause, code, status, name });
  }
}
