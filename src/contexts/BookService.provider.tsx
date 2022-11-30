import React, { PropsWithChildren } from 'react';

import { IuseBookService, useBookService } from '../hooks/useBookService';
import { BookServiceContext } from './BookService.context';

export const BookServiceProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const useBookHook: IuseBookService = useBookService();
  return (
    <BookServiceContext.Provider value={useBookHook}>
      {children}
    </BookServiceContext.Provider>
  );
};
