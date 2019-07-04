import { checkSchema, validationResult } from 'express-validator';
import { registrationSchema, loginSchema, feedSchema } from './validationSchemas';

// Maps express-validator errors array to object { "field": "message" }
function mapFields(error) {
  const fields = {};
  error.errors.forEach((err) => {
    fields[err.param] = err.msg;
  });
  return fields;
}

const RegisterValidator = [
  checkSchema(registrationSchema),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      res.status(422).send({
        error: {
          code: 'FIELDS_VALIDATION_ERROR',
          message: 'One or more fields raised validation errors',
          fields: mapFields(error),
        },
      });
    }
  },
];

const LoginValidator = [
  checkSchema(loginSchema),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      res.status(422).send({
        error: {
          code: 'FIELDS_VALIDATION_ERROR',
          message: 'One or more fields raised validation errors',
          fields: mapFields(error),
        },
      });
    }
  },
];

const FeedValidator = [
  checkSchema(feedSchema),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      next();
    } catch (error) {
      res.status(400).send({
        error: {
          code: 'INVALID_FEED_OBJECT',
          message: 'Feed object might be missing some fields, or fields values are invalid',
          fields: mapFields(error),
        },
      });
    }
  },
];

export { LoginValidator, RegisterValidator, FeedValidator };
