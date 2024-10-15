import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute';
import thoughtRoutes from './routes/userRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // Middleware for parsing JSON requests

// MongoDB connection using Mongoose
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/socialnetwork_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Using the /api/users route for user-related requests
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
