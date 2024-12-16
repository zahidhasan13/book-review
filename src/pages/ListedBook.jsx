import React, { useContext, useState } from "react";
import ListedItem from "../components/ListedItem";
import { BookContext } from "../context/BookProvider";

const ListedBook = () => {
  const [activeTab, setActiveTab] = useState("read-book");

  const {
    readBook,
    wishList,
    sortByRating,
    sortByPages,
    sortByPublishedYear,
    openDropDown,
    setOpenDropDown,
  } = useContext(BookContext);
  return (
    <div className="min-h-screen container mx-auto py-20 px-2 xl:px-0">
      <div className="flex items-center justify-between border-b-2 border-sky-500 px-2 relative">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActiveTab("read-book")}
            className={activeTab === "read-book" ? "activeTab" : "deactiveTab"}
          >
            Read Book
          </button>
          <button
            onClick={() => setActiveTab("wishList")}
            className={activeTab === "wishList" ? "activeTab" : "deactiveTab"}
          >
            WishList
          </button>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpenDropDown(!openDropDown)}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-sky-500 hover:bg-sky-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Sort{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`absolute top-10 right-0 z-10 bg-sky-500 shadow w-32 md:w-44 ${
              openDropDown ? "block" : "hidden"
            }`}
          >
            <ul
              className="py-2 text-sm text-white"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <button
                  onClick={sortByRating}
                  className="block md:w-full px-4 py-2 hover:bg-sky-700"
                >
                  Rating
                </button>
              </li>
              <li>
                <button
                  onClick={sortByPages}
                  className="block md:w-full px-4 py-2 hover:bg-sky-700"
                >
                  Number of Pages
                </button>
              </li>
              <li>
                <button
                  onClick={sortByPublishedYear}
                  className="block md:w-full px-4 py-2 hover:bg-sky-700"
                >
                  Published Year
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5">
        {readBook.length === 0 && activeTab === "read-book" ? (
          <p className="text-center text-2xl font-bold text-sky-500">
            Read Book List is Empty!
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {activeTab === "read-book" &&
              readBook?.map((book) => (
                <ListedItem key={book.bookId} book={book} type="read-book" />
              ))}
          </div>
        )}
        {wishList.length === 0 && activeTab === "wishList" ? (
          <p className="text-center text-2xl font-bold text-sky-500">
            Wishlist is Empty!
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {activeTab === "wishList" &&
              wishList?.map((book) => (
                <ListedItem key={book.bookId} book={book} type="wishList" />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBook;
