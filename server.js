const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config/db'); //database connection
const userRoutes = require('./routes/userRoutes'); //user routes

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); //Middleware to parse JSON bodies
app.use('/api/users', userRoutes); //Use user routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
