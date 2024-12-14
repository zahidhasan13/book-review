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
    <header>
      <nav class="bg-white px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" class="text-2xl font-semibold">
            Book <span className="text-sky-500">Review</span>
          </Link>
          <div class="flex items-center lg:order-2">
            <div className="flex items-center gap-3">
              <button class="btn-primary">Log in</button>
              <button class="btn-primary">Sign up</button>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-2xl rounded-lg lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={menuToggler}
            >
              <span class="sr-only">Open main menu</span>
              <span>
                <FaBars />
              </span>
            </button>
          </div>
          <div
            class={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2 ${openMenu ? "block" : "hidden"}`}
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
                  Book List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages-to-read"
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
