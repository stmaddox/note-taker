const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



