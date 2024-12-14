import React, { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookProvider";

const AllBook = () => {
  const { allBooks, setAllBooks } = useContext(BookContext);
  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data.allBooks));
  }, []);
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2">
          All <span className="text-sky-500">Books</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
          {allBooks?.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBook;
