import AuthService from '../../services/AuthService';

export default (app) => {
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    try {
      const userId = await AuthService.register({ username, password });
      res.status(400).send({
        data: {
          userId,
        },
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
