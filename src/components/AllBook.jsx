import React, { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import { BookContext } from "../context/BookProvider";

const AllBook = () => {
  const { allBooks, loading } = useContext(BookContext);

  return (
    <section className="py-10">
      <div className="container mx-auto px-2 lg:px-0">
        <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2">
          All <span className="text-sky-500">Books</span>
        </h2>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {allBooks?.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllBook;
