import React, { useState } from "react";
import ListedItem from "../components/ListedItem";

const ListedBook = () => {
  const [activeTab, setActiveTab] = useState("read-book");
  const wishList = JSON.parse(localStorage.getItem("wishList"));
  const readBook = JSON.parse(localStorage.getItem("read-book"));
  return (
    <div className="min-h-screen container mx-auto py-20">
      <div className="flex items-center justify-between border-b-2 border-sky-500 px-2">
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
        <div>sort by</div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {activeTab === "read-book" &&
            readBook?.map((book) => (
              <ListedItem key={book.bookId} book={book} />
            ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {activeTab === "wishList" &&
            wishList?.map((book) => (
              <ListedItem key={book.bookId} book={book} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
