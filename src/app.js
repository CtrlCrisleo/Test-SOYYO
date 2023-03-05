import express from 'express';
import entitiesRoutes from './routes/entitiesRoutes.js';

const app = express();

/*Routes*/
app.use('/api/entities', entitiesRoutes);

export default app;