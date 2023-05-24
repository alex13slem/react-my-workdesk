export default class PostService {
  static async getProducts({limit = 30, skip = 0}) {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return response;
  }
}

// https://dummyjson.com/products
