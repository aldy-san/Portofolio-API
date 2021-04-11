const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

//import routes
const projectsRoute = require('./routes/projectsRoute');
app.use('/projects', projectsRoute);

//routes
app.get('/', (req, res) => {
    res.send("anjayss jadi");
})
app.get('/asas', (req, res) => {
    res.send("anjssssssayss jadi");
})
//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connect4edd'));
//listen
app.listen(3000);