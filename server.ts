import dotenv from 'dotenv';
import {connectDB} from "./config/db";
import result from './app';

dotenv.config({path: `.env.${process.env.NODE_ENV}`});

const port = process.env.PORT || '3000';
const dbUri = process.env.MONGO_URI || '';

connectDB(dbUri)

result.listen(port, () => {
    console.log("Server listening on port:", port);
});

export {result};
