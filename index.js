import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

mongoose.connect(process.env.DB_MONGO)
    .then(() => console.log('DB ok'))
    .catch(() => console.log('DB error', error));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});