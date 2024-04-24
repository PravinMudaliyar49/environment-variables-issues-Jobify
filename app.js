import express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

import userRouter from './userRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/v1/users', userRouter);

console.log(process.env.NODE_ENV);

export default app;
