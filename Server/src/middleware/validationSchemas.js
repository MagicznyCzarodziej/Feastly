const registrationSchema = {
  username: {
    in: 'body',
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

const feedSchema = {
  name: {
    in: 'body',
    trim: true,
    isLength: {
      errorMessage: 'Name cannot be empty',
      options: { min: 1 },
    },
    escape: true,
  },
  url: {
    in: 'body',
    isURL: {
      errorMessage: 'Feed URL must be valid URL',
    },
  },
  category: {
    in: 'body',
    optional: true,
    trim: true,
    escape: true,
  },
};

export { registrationSchema, loginSchema, feedSchema };
