import Api from './Api';

export default {
  async getSources(options) {
    const result = await Api().get('feeds', { params: options });
    return result.data.data.feeds;
  },
  addSource(source) {
    return Api().post('feeds', source);
  },
  async getCategories() {
    const result = await Api().get('feeds/categories');
    return result.data.data.categories;
  },
};
