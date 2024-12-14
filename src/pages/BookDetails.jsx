import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../context/BookProvider";
import { FaStar } from "react-icons/fa";

const BookDetails = () => {
  const { allBooks } = useContext(BookContext);
  const { id } = useParams();

  const book = allBooks.find((book) => String(book.bookId) === id);

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2">
        Book <span className="text-sky-500">Details</span>
      </h2>
      <div className="flex items-start gap-10 mt-10">
        <div className="w-1/2">
          <img src={book.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-semibold text-gray-600">
            Book Name: <span className="text-3xl">{book.bookName}</span>
          </h3>
          <h4 className="text-lg font-semibold text-gray-600">
            Author: <span className="text-xl">{book.author}</span>
          </h4>
          <p className="text-lg font-semibold text-gray-600">
            Category: {book.category}
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Review: {book.review}
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Tags:{" "}
            {book.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Total Pages: {book.totalPages}
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Publisher: {book.publisher}
          </p>
          <p className="text-lg font-semibold text-gray-600">
            Published Year: {book.yearOfPublishing}
          </p>
          <p className="text-lg font-semibold text-gray-600 flex items-center gap-2">
            Rating: {book.rating}{" "}
            <span className="text-yellow-500">
              <FaStar />
            </span>
          </p>
          <div className="flex items-center gap-3">
            <button className="btn-primary">Read Book</button>
            <button className="btn-secondary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
