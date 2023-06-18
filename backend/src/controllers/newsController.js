import { newsService } from "../services/newsService.js";

class NewsController {
  create(req, res) {
    try {
      // TODO - implement create new post
    } catch (e) {
      res.status(500).json(e);
    }
  }

  getAll(req, res) {
    try {
      const posts = newsService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  getOne(req, res) {
    try {
      const post = newsService.getOne(req.params._id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  update(req, res) {
    try {
      // TODO - implement update post
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  delete(req, res) {
    try {
      // TODO - implement delete post
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new NewsController();
