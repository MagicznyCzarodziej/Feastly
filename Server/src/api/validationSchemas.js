const registrationSchema = {
  username: {
    in: 'body',
    isString: {
      errorMessage: 'Username must be a string',
    },
    isAlphanumeric: {
      errorMessage: 'Username must be alphanumeric',
    },
    isLength: {
      errorMessage: 'Username must be at least 6 characters long',
      options: { min: 6 },
    },
  },
  password: {
    in: 'body',
    isString: {
      errorMessage: 'Password must be a string',
    },
    isAlphanumeric: {
      errorMessage: 'Password must be alphanumeric',
    },
    isLength: {
      errorMessage: 'Password must be at least 6 characters long',
      options: { min: 6 },
    },
  },
};

const loginSchema = {
  username: {
    in: 'body',
  },
  password: {
    in: 'body',
  },
};

export { registrationSchema, loginSchema };
