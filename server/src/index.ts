import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import apiRoutes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/socialnetwork_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
