import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//Creating Router ..........
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

//Database Connection Check............
mongoose.connect(process.env.URI)
.then(() => {
    console.log('Connected to the Mongo DB');
})
.catch((err) => {
    console.log("Error Found", err);
});

// Creating Server ............

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);