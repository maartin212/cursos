import { Request, Response } from 'express';
import Book, { IBook } from '../models/Book';

export const index = async (req: Request, res: Response) => {
  const books: IBook[] = await Book.find().lean();
  res.render('books/index', { title: 'Books', books });
};

export const addForm = (req: Request, res: Response) => {
  res.render('books/add');
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, isbn } = req.body;
  const book: IBook = new Book({ title, author, isbn });
  await book.save();
  res.redirect('/books');
};
