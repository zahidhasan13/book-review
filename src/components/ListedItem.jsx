import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListedItem = ({ book }) => {
  return (
    <div className="list-item-card border-2 border-sky-500 p-4 rounded-md flex items-start gap-10">
      <div className="w-1/3">
        <img src={book?.image} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-5">
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
        <h3 className="text-lg font-semibold text-gray-600">
          Book Name: <span className="text-3xl">{book?.bookName}</span>
        </h3>
        <h4 className="text-lg font-semibold text-gray-600">
          Author: <span className="text-xl">{book?.author}</span>
        </h4>
        <p className="text-lg font-semibold text-gray-600">
          Published Year: {book?.yearOfPublishing}
        </p>
        <p className="text-lg font-semibold text-gray-600 flex items-center gap-2">
          Rating: {book?.rating}{" "}
          <span className="text-yellow-500">
            <FaStar />
          </span>
        </p>
        <Link to={`/book-details/${book.bookId}`}>
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ListedItem;
