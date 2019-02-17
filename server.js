//generic libs
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import Cors from 'cors';
//app
const app = express();
//port
const API_PORT = process.env.API_PORT || 3000;
//cors
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
//routes
require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/findUsers')(app);
require('./routes/deleteUser')(app);
require('./routes/updateUser')(app);
//listen
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
