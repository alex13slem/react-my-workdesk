import axios from 'axios';

export default class PostService {
  static async getProducts({limit = 30, skip = 0}) {
    const response = await axios.get('https://dummyjson.com/products/', {
      params: {
        limit,
        skip,
      },
    });
    return response.data;
  }
}

// https://dummyjson.com/products
