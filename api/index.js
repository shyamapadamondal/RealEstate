import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//Database Connection ............
mongoose.connect(process.env.URI)
.then(() => {
    console.log('Connected to the Mongo DB');
})
.catch((err) => {
    console.log("Mongo Err", err);
});

// Creating Server ............

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

app.get('/test', (req, res) => {
    res.send('Server is runnig perfectly fine.');
    console.log('All set');
});