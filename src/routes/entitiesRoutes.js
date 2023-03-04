import { Router } from 'express';
import entitiesController from '../controllers/entitiesController.js';

const router = new Router();

router.get('/:startId/:endId', entitiesController.getEntities);

export default router;