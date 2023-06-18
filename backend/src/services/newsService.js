import { MOCK_POSTS } from "../mock-data/posts.js";

class NewsService {
  getAll() {
    return MOCK_POSTS;
  }

  getOne(id) {
    if (!id) {
      throw new Error("ID is not provided");
    }
    const selectedPost = MOCK_POSTS.filter((el) => el.id === id);
    return selectedPost;
  }
}

export const newsService = new NewsService();
