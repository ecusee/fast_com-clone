require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.port;
const Routes = require('./app/routes');

app.use([
    cors(),
    Routes
])

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))