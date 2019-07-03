import FeedsService from '../../services/feeds';
import AuthMiddleware from '../../middleware/auth';

export default (app) => {
  app.get('/feeds', AuthMiddleware, async (req, res) => {
    const feeds = await FeedsService.getAllFeeds(res.locals.userId);

    res.status(200).send({
      data: {
        feeds,
      },
    });
  });
};
