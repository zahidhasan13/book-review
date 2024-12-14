import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [readBook, setReadBook] = useState(() => {
    const storedReadBooks = JSON.parse(localStorage.getItem("read-book"));
    return storedReadBooks || [];
  });
  const [wishList, setWishList] = useState(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList"));
    return storedWishList || [];
  });

  useEffect(() => {
    const getAllData = async () => {
      setLoading(true);
      const res = await fetch("/db.json");
      const data = await res.json();
      setAllBooks(data.allBooks);
      setLoading(false);
    };
    getAllData();
  }, []);

  const book = {
    allBooks,
    setAllBooks,
    loading,
    setLoading,
    readBook,
    setReadBook,
    wishList,
    setWishList,
  };
  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
};

export default BookProvider;
