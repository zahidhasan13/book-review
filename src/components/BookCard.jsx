import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link to={`/book-details/${book.bookId}`}>
      <div className="card p-10 bg-gradient-to-t from-white to-gray-300 rounded-md h-[700px]">
        <div className="flex justify-center">
          <img src={book.image} alt={book.bookName} className="w-52 h-72" />
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex items-center flex-wrap gap-3">
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-gray-700">{book.bookName}</h3>
          <h4 className="text-xl font-semibold text-gray-600">
            Author: {book.author}
          </h4>
          <p className="text-lg font-semibold text-gray-600">
            Category: {book.category}
          </p>
          <p className="text-lg font-semibold text-gray-600 flex items-center gap-2">
            Rating: {book.rating}{" "}
            <span className="text-yellow-500">
              <FaStar />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
