import { useState } from 'react';

import { IBook } from '../../../models/Book';

const useUpdateBookForm = (bookToUpdate: IBook) => {
  const [title, setTitleState] = useState<string>(bookToUpdate.title);
  const [isTitleError, setTitleErrorState] = useState<boolean>(false);
  const [author, setAuthorState] = useState<string>(bookToUpdate.author);
  const [isAuthorError, setAuthorErrorState] = useState<boolean>(false);
  const setTitle = (title: string) => {
    setTitleState(title);
  };
  const setAuthor = (author: string) => {
    setAuthorState(author);
  };
  const isFormValid = () => {
    if (author && title) {
      setTitleErrorState(false);
      setAuthorErrorState(false);
      return true;
    }
    if (!title) {
      setTitleErrorState(true);
    }
    if (!author) {
      setAuthorErrorState(true);
    }
    return false;
  };
  return {
    title,
    setTitle,
    isTitleError,
    author,
    setAuthor,
    isAuthorError,
    isFormValid,
  };
};

export default useUpdateBookForm;
