import React, { createContext } from 'react';

import { IuseBookService } from '../hooks/useBookService';

export const BookServiceContext: React.Context<IuseBookService> =
  createContext<IuseBookService>({
    books: [],
    saveBook: async () => {},
    switchFavorite: async (book) => {},
    switchRead: async (book) => {},
    deleteBook: async (book) => {},
    updateBook: async (book) => {},
  });
