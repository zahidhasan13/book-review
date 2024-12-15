import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookProvider";
import Swal from "sweetalert2";

const ListedItem = ({ book, type }) => {
  const { setReadBook, setWishList } = useContext(BookContext);
  const bookDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (type === "read-book") {
          const localReadBook =
            JSON.parse(localStorage.getItem("read-book")) || [];
          const updatedReadBook = localReadBook.filter(
            (book) => book.bookId != id
          );
          setReadBook(updatedReadBook);
          localStorage.setItem("read-book", JSON.stringify(updatedReadBook));
        } else if (type === "wishList") {
          const localWishList =
            JSON.parse(localStorage.getItem("wishList")) || [];
          const updatedWishList = localWishList.filter(
            (book) => book.bookId != id
          );
          setWishList(updatedWishList);
          localStorage.setItem("wishList", JSON.stringify(updatedWishList));
        }

        // Show success alert
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="list-item-card border-2 border-sky-500 p-4 rounded-md flex items-start flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/3">
        <img src={book?.image} alt="" className="w-full" />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col gap-5 overflow-hidden">
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
        <h3 className="text-lg font-semibold text-gray-600 truncate">
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
        <div className="flex items-center gap-3">
          <Link to={`/book-details/${book.bookId}`}>
            <button className="btn-primary">View Details</button>
          </Link>
          <button
            onClick={() => bookDeleteHandler(book.bookId)}
            className="btn-danger"
          >
            Delete Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedItem;
