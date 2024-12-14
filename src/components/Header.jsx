import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header py-5">
      <nav className="nav container mx-auto px-4 lg:px-0 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          <h2>
            Book <span className="text-sky-500">Review</span>
          </h2>
        </Link>
        <ul className="links flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : "deactiveLink"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book-list"
              className={({ isActive }) =>
                isActive ? "activeLink" : "deactiveLink"
              }
            >
              BookList
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) =>
                isActive ? "activeLink" : "deactiveLink"
              }
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
        <div className="btn-group flex gap-3">
          <button className="bg-black px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-black/75 duration-300">
            Sign In
          </button>
          <button className="bg-black px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-black/75 duration-300">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
