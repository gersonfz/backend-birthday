import express from 'express';
import routerApi from './routes/app.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/send-mail', routerApi)
app.use('/', (req, res) => res.send('<h1>Hola mundo</h1>'))

export default app;