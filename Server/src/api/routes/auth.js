import { checkSchema, validationResult } from 'express-validator';
import AuthService from '../../services/auth';
import { registrationSchema, loginSchema } from '../validationSchemas';

export default (app) => {
  app.post('/register', checkSchema(registrationSchema), async (req, res) => {
    // Credentials validation
    try {
      validationResult(req).throw();
    } catch (error) {
      res.status(422).send({
        error: {
          code: 'FIELDS_VALIDATION_ERROR',
          message: 'One or more fields raised validation errors',
        }
      });
      return;
    }
    
    // If credentials OK, proceed to registration
    const { username, password } = req.body;
    try {
      const user = await AuthService.register({ username, password });
      res.status(200).send({
        data: { user },
      });
    } catch (error) {
      res.status(409).send({
        error: {
          code: 'USERNAME_ALREADY_EXISTS',
          message: 'An account already exists with this username',
        },
      });
    }
  });

  app.post('/login', checkSchema(loginSchema), async (req, res) => {
    // Check if credentials aren't missing
    try {
      validationResult(req).throw();
    } catch (error) {
      res.status(422).send({
        error: {
          code: 'FIELDS_VALIDATION_ERROR',
          message: 'One or more fields raised validation errors',
        }
      });
      return;
    }
    // If fields are OK, proceed to login
    const { username, password } = req.body;
    try {
      const user = await AuthService.login({ username, password });
      res.status(200).send({
        data: { user },
      });
    } catch (error) {
      res.status(401).send({
        error: {
          code: 'USERNAME_OR_PASSWORD_INVALID',
          message: 'Username or password is invalid',
        }
      });
    }
  });
};
