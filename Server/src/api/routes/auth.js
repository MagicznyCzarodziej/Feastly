import AuthService from '../../services/auth';
import { LoginValidator, RegisterValidator } from '../../middleware/validators';

export default (app) => {
  app.post('/register', RegisterValidator, async (req, res) => {
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

  app.post('/login', LoginValidator, async (req, res) => {
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
        },
      });
    }
  });
};
