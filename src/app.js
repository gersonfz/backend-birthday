import express from 'express';
import cors from 'cors';
import routerApi from './routes/app.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/send-mail', routerApi)
app.use('/send-mail', (req, res) => res.send('<h1>Hola mundo</h1>'))

export default app;