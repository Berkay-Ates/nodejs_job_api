const express = require('express');
const app = express();
const tasks = require('./routes/task_routes');
const { connectDB } = require('./db/db');
const { port, mongo_uri } = require('./product/params');
require('dotenv').config();



//* middleware
app.use(express.json());
//* task routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(mongo_uri);
        app.listen(port, () => {
            console.log(`app is working on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
