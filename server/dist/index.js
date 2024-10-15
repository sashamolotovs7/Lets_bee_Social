"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json()); // Middleware for parsing JSON requests
// MongoDB connection using Mongoose
mongoose_1.default.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/socialnetwork_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));
// Using the /api/users route for user-related requests
app.use('/api/users', userRoute_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
