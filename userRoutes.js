import express from 'express';

import { createUser } from './userController.js';

const router = express.Router();

router.route('/').post(createUser);

console.log(process.env.NODE_ENV);

export default router;
