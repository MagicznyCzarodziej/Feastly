import FeedsService from '../../services/feeds';
import AuthMiddleware from '../../middleware/auth';
import { FeedValidator, FeedIdValidator } from '../../middleware/validators';

export default (app) => {
  // Get all user feeds
  app.get('/feeds', AuthMiddleware, async (req, res) => {
    const options = req.query;
    const feeds = await FeedsService.getFeeds(res.locals.userId, options);

    res.status(200).send({
      data: {
        feeds,
      },
    });
  });

  // Add feed
  app.post('/feeds', AuthMiddleware, FeedValidator, async (req, res) => {
    const arg = {
      userId: res.locals.userId,
      feed: {
        url: req.body.url,
        name: req.body.name,
        category: req.body.category,
      },
    };
    try {
      const feed = await FeedsService.addFeed(arg);
      return res.status(200).send({
        data: {
          feed,
        },
      });
    } catch (error) {
      return res.status(500).send({
        error: {
          code: '',
          message: '',
        },
      });
    }
  });

  app.get('/feeds/categories', AuthMiddleware, async (req, res) => {
    try {
      const categories = await FeedsService.getCategories(res.locals.userId);
      res.status(200).send({
        data: {
          categories,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: {
          code: 'SERVER_ERROR',
          message: 'Something went wrong',
        },
      });
    }
  });

  app.delete('/feeds/:id', AuthMiddleware, FeedIdValidator, async (req, res) => {
    try {
      const feedId = req.params.id;
      const { userId } = res.locals;
      await FeedsService.deleteFeed(userId, feedId);
      res.status(204).send({
        data: null,
      });
    } catch (error) {
      res.status(500).send({
        error: {
          code: 'SERVER_ERROR',
          message: 'Something went wrong',
        },
      });
    }
  });
};
