import express from 'express';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => res.send('<h1>Hola mundo</h1>'))

export default app;