import { Types } from 'mongoose';
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

const FeedIdValidator = (req, res, next) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    res.status(422).send({
      error: {
        code: 'FEED_ID_INVALID',
        message: 'Feed id is invalid',
      },
    });
  } else next();
};

export { LoginValidator, RegisterValidator, FeedValidator, FeedIdValidator };
