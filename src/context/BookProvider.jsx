import React, { Children, createContext, useState } from "react";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const book = { allBooks, setAllBooks };
  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
};

export default BookProvider;
