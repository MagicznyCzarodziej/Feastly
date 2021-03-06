import AuthService from '../services/auth';

export default async (req, res, next) => {
  const token = req.get('Authorization');

  // Token not provided
  if (!token) {
    res.status(401).send({
      data: {
        error: {
          code: 'AUTHORIZATION_TOKEN_REQUIRED',
          message: 'Authorization token is required',
        },
      },
    });
    return;
  }

  // Check if token is valid
  try {
    const userId = await AuthService.auth(token);

    res.locals.userId = userId;
    next();
  } catch (error) {
    console.log(error);

    res.status(401).send({
      data: {
        error: {
          code: 'AUTHORIZATION_TOKEN_INVALID',
          message: 'Authorization token is invalid',
        },
      },
    });
  }
};
