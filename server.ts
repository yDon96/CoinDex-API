import dotenv from 'dotenv';
const app = require('./app');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT || '3000';

console.log("Server listening on port:", port);

app.listen(port);

module.exports = app;
