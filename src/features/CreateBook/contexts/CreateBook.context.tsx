import React, { createContext } from 'react';

import { ISaveBook } from '../hooks';

export const CreateBookContext: React.Context<ISaveBook> =
  createContext<ISaveBook>({ async saveBook() {} });
