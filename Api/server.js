/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import dotenv from 'dotenv';
const Joi = require ('joi');// instantiate validator class Joi
dotenv.config();
// Instantiate express
const app = express();
// Set our port
const port = process.env.PORT || 8000;
// Configure app to user bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// Register our routes in app
app.use('/', routes);
// Start our server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// Export our app for testing purposes
export default app;