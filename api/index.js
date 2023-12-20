import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Database Connection ............
mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to the Mongo DB');
}).catch((err) => {
    console.log(err);
});

const app = express();

//Server Connection .............
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});