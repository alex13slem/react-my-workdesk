export default class PostService {
  static async getProducts() {
    const response = axios.get('https://dummyjson.com/products', {
      params: {},
    });
    return response;
  }
}
