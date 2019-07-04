import FeedsService from '../../services/feeds';
import AuthMiddleware from '../../middleware/auth';
import { FeedValidator } from '../../middleware/validators';

export default (app) => {
  // Get all user feeds
  app.get('/feeds', AuthMiddleware, async (req, res) => {
    const feeds = await FeedsService.getAllFeeds(res.locals.userId);

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
      feed: req.body.feed,
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
};
