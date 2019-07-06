import Api from './Api';

export default {
  async addSource(source) {
    return Api().post('feeds', source);
  },
};
