import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookContext } from "../context/BookProvider";

const BookDetails = () => {
  const { id } = useParams();
  const [allBook, setAllBook] = useState([]);
  const { readBook, setReadBook, wishList, setWishList } =
    useContext(BookContext);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch("/db.json");
      const data = await response.json();
      setAllBook(data.allBooks);
    };

    fetchBook();
  }, [id]);

  const book = allBook.find((book) => book.bookId == id);

  // const book = allBooks.find((book) => String(book.bookId) === id);

  const readBookHandler = (id) => {
    // wishlist
    const localWishList = JSON.parse(localStorage.getItem("wishList") || []);
    // const existWishListData = localWishList?.find((book) => book.bookId == id);
    // Read Book list
    const localReadBook = JSON.parse(localStorage.getItem("read-book"));
    const existData = localReadBook?.find((book) => book.bookId == id);
    if (id == book.bookId && !existData) {
      setReadBook([...readBook, book]);

      const updatedWishList = localWishList.filter(
        (item) => item.bookId != book.bookId
      );
      setWishList(updatedWishList);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      toast.success("Added to Read Book list");
    } else {
      toast.warning("Already added in Read Book list");
    }
  };
  const wishlistHandler = (id) => {
    // read-book list
    const localReadBook = JSON.parse(localStorage.getItem("read-book"));
    const existReadData = localReadBook?.find((book) => book.bookId == id);
    // wishlist
    const localWishList = JSON.parse(localStorage.getItem("wishList"));
    const existData = localWishList?.find((book) => book.bookId == id);
    if (existReadData) {
      toast.warning("Already you read this book");
    }
    if (id == book.bookId && !existData) {
      if (!existReadData) {
        setWishList([...wishList, book]);
        toast.success("Added to wishlist");
      }
    } else {
      toast.warning("Already added in wishlist");
    }
  };

  useEffect(() => {
    localStorage.setItem("read-book", JSON.stringify(readBook));
    // localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [readBook]);
  useEffect(() => {
    // localStorage.setItem("read-book", JSON.stringify(readBook));
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2">
        Book <span className="text-sky-500">Details</span>
      </h2>
      {!book?.bookName ? (
        <p>Loading....</p>
      ) : (
        <div className="flex items-start gap-10 mt-10">
          <div className="w-1/2">
            <img src={book?.image} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold text-gray-600">
              Book Name: <span className="text-3xl">{book?.bookName}</span>
            </h3>
            <h4 className="text-lg font-semibold text-gray-600">
              Author: <span className="text-xl">{book?.author}</span>
            </h4>
            <p className="text-lg font-semibold text-gray-600">
              Category: {book?.category}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Review: {book?.review}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Tags:{" "}
              {book?.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Total Pages: {book?.totalPages}
            </p>
            <p className="text-lg font-semibold text-gray-600">
              Publisher: {book?.publisher}
            </p>
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
              <button
                onClick={() => readBookHandler(book?.bookId)}
                className="btn-primary"
              >
                Read Book
              </button>
              <button
                onClick={() => wishlistHandler(book?.bookId)}
                className="btn-secondary"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
