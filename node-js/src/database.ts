import mongoose from 'mongoose';
import { mongodb } from './keys';

mongoose
  .connect(mongodb.URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log('DB is connected!'))
  .catch((e) => console.log('Error:', e));
