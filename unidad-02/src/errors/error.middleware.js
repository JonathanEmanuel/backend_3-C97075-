import { logger } from '../config/logger.js';
import { errorInfo } from './errorInfo.js';

export function errorMiddleware(err, req, res, next) {
  const status = Number(err.status ?? 500);
  const payload = errorInfo(err);

  // Log interno
  logger.error('Error:', {
    method: req.method,
    url: req.url,
    status,
    payload,
    stack: err.stack
  });

  res.status(status).json({ status: 'error', ...payload });
}
