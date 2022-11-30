import React, { PropsWithChildren } from 'react';

import { useSaveBook } from '../hooks';
import { CreateBookContext } from './CreateBook.context';

export const CreateBookProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const saveBookService = useSaveBook();
  return (
    <CreateBookContext.Provider value={saveBookService}>
      {children}
    </CreateBookContext.Provider>
  );
};
