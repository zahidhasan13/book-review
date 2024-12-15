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

  const sortByRating = () => {
    const sortBook = [...readBook].sort((a, b) => b.rating - a.rating);
    const sortWishlist = [...wishList].sort((a, b) => b.rating - a.rating);
    setReadBook(sortBook);
    setWishList(sortWishlist);
    localStorage.setItem("read-book", JSON.stringify(sortBook));
    localStorage.setItem("wishList", JSON.stringify(sortWishlist));
  };
  const sortByPages = () => {
    const sortBook = [...readBook].sort((a, b) => b.totalPages - a.totalPages);
    const sortWishlist = [...wishList].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadBook(sortBook);
    setWishList(sortWishlist);
    localStorage.setItem("read-book", JSON.stringify(sortBook));
    localStorage.setItem("read-book", JSON.stringify(sortWishlist));
  };
  const sortByPublishedYear = () => {
    const sortBook = [...readBook].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    const sortWishlist = [...wishList].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setReadBook(sortBook);
    setWishList(sortWishlist);
    localStorage.setItem("read-book", JSON.stringify(sortBook));
    localStorage.setItem("read-book", JSON.stringify(sortWishlist));
  };

  const book = {
    allBooks,
    setAllBooks,
    loading,
    setLoading,
    readBook,
    setReadBook,
    wishList,
    setWishList,
    sortByRating,
    sortByPages,
    sortByPublishedYear,
  };
  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
};

export default BookProvider;
