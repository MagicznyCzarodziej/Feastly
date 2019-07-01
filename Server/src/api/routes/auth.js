import AuthService from '../../services/auth';

export default (app) => {
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await AuthService.register({ username, password });
      res.status(400).send({
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
};
