import Api from './Api';

export default {
  async register(credentials) {
    return Api().post('register', credentials);
  },
};
