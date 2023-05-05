const PORT = 3000;
const express = require('express');
const apiRoute = require('./src/interfaces/http/Router');
const { errors } = require('celebrate');

const app = express();
const cors = require('cors');

app.use(cors())
app.use('/api', apiRoute);
app.use(errors())
app.listen(PORT, () => {
    console.log("Server running on Port: ", PORT);
})