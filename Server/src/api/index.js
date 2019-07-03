import { Router } from 'express';
import auth from './routes/auth';
import feeds from './routes/feeds';

const app = Router();

auth(app);
feeds(app);

export default app;
