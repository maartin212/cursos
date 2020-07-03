import { authors } from '../data/authors';
import { books } from '../data/books';
import { reviews } from '../data/reviews';

export const resolvers = {
  Query: {
    ping: () => 'pong!',
    getBooks: () => {
      return books;
    },
    getAuthors: () => {
      return authors;
    },
    getReviews: () => {
      return reviews;
    },
  },
  Book: {
    author: ({ author }) => {
      return authors.find((a) => a.id === author);
    },
    reviews: (parent) => {
      return reviews.filter((review) => review.book === parent.id);
    },
  },
  Author: {
    books: (parent) => {
      return books.filter((book) => book.author === parent.id);
    },
  },
  Review: {
    book: (parent) => {
      return books.find((book) => book.id === parent.book);
    },
  },
};
