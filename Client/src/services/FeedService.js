import Api from './Api';

export default {
  addSource(source) {
    return Api().post('feeds', source);
  },
  async getCategories() {
    const result = await Api().get('feeds/categories');
    return result.data.data.categories;
  },
};
