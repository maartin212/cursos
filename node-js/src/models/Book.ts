import mongoose, { Schema, model } from 'mongoose';

export interface IBook extends mongoose.Document {
  title: string;
  author: string;
  isbn: string;
}

const bookSchema = new Schema({
  title: String!,
  author: String!,
  isbn: String,
});

export default model<IBook>('Book', bookSchema);
