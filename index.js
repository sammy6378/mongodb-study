import express from 'express';
import 'dotenv/config'
import connectDB from './db/connect.js';
import { deleteData } from './models/Movies.js';

const app = express();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL;

app.use(express.json());

connectDB(url);

// retrieveDoc();
// updateData("674450c1ddc474a1b8ad7013");

deleteData();

// server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});