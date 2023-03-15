import mongoose from "mongoose";

const URI = process.env['MONGO_URI'] || 'mongodb://localhost:27017/users';

mongoose.set('strictQuery', false);
mongoose.connect(URI, { serverSelectionTimeoutMS: 10000 })
  .then(() => {
    console.log('Mongo connection was successfully established.');
  })
  .catch((error) => {
    console.log(`Mongo connection was failed by: ${error}`);
  });

export { mongoose };