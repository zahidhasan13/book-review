import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Toogle Menu
  const menuToggler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/90 backdrop-blur-sm px-2 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="text-xl font-semibold whitespace-nowrap">
            Book <span className="text-sky-500">Review</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <div className="flex items-center gap-1">
              <button className="btn-primary">Log in</button>
              <button className="btn-primary">Sign up</button>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-lg rounded-lg lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={menuToggler}
            >
              <span className="sr-only">Open main menu</span>
              <span>
                <FaBars />
              </span>
            </button>
          </div>
          <div
            className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2 ${openMenu ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/listed-book"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  Listed Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages-to-read"
                  onClick={() => setOpenMenu(!openMenu)}
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "deactiveLink"
                  }
                >
                  Pages to Read
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
