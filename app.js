import express, { urlencoded } from 'express';
import errorHandler from './src/middleware/errorHandler.js';
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'));
app.use(morgan('combined'));

// routes
import userRoute from './src/routes/user.routes.js';
import blogRoute from './src/routes/blog.routes.js';

app.use('/api/user', userRoute);
app.use('/api/blog', blogRoute);

// error middleware
app.use(errorHandler);

export default app;
