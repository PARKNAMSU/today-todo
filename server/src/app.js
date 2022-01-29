const express = require('express');

const cors = require('cors');
const app = express();
const port = 80;

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config();
const { MONGODB_URL } = process.env;

const userRouter = require('./routers/userRouter');
const todoRouter = require('./routers/todoRouter');
const statsRouter = require('./routers/statsRouter');

mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to mongodb!!!'))
    .catch((e) => console.error(e));

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());

app.use('/user', userRouter);
app.use('/todo', todoRouter);
app.use('/stats', statsRouter);

app.get('/', (req, res) => {
    res.send('hellow world!!');
});

app.listen(port, () => {
    console.log(`${port} port open`);
});
