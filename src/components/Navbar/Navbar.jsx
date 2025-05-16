import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropDownList = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl flex items-center gap-1">
              <FiShoppingBag size={30} />
              ShopMe
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* Search Input */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl drop-shadow-sm" />
            </button>

            {/* Dark Mode Toggle */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2 py-2">
              Trending Products{" "}
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 text-black dark:text-white w-[200px] rounded-md shadow-md z-[9999] p-2">
              <ul>
                {DropDownList.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-white/10 duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
