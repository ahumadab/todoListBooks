import { useCallback, useEffect, useState } from 'react';

const useCreateBook = () => {
  const [title, setTitleState] = useState<string>("");
  const [isTitleError, setTitleErrorState] = useState<boolean>(false);
  const [author, setAuthorState] = useState<string>("");
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
  const resetForm = () => {
    setAuthorState("");
    setAuthorErrorState(false);
    setTitleState("");
    setTitleErrorState(false);
  };

  return {
    title,
    setTitle,
    isTitleError,
    author,
    setAuthor,
    isAuthorError,
    isFormValid,
    resetForm,
  };
};

export default useCreateBook;
