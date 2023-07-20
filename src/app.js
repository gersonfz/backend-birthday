import express from 'express';
import cors from 'cors';
import routerApi from './routes/app.routes.js';
import routerMusic from './routes/music.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
  }));
  
// Routes
app.use('/send-mail', routerApi)
app.use('/send-music', routerMusic)
export default app;