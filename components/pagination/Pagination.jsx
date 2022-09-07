import React from "react";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";

function Pagination({ data, activePage, setActivePage }) {
  const totalPages = Math.ceil(data.length / 10);
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const next = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };
  const prev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            <a
              onClick={() => prev()}
              href="#pablo"
              className="hover:bg-gray-300 first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-white text-gray-500"
            >
              <FaChevronLeft />
            </a>
          </li>
          {pages &&
            pages.map((page, i) => (
              <li key={i}>
                <a
                  onClick={(e) => setActivePage(page)}
                  className={` ${
                    activePage == page
                      ? "text-gray-100 bg-gray-500 "
                      : "text-gray-600 "
                  }first:ml-0 hover:bg-gray-300 text-xs font-semibold cursor-pointer flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative  bg-white `}
                >
                  {page}
                </a>
              </li>
            ))}
          <li>
            <a
              onClick={() => next()}
              href="#pablo"
              className="hover:bg-gray-300 first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-white text-gray-500"
            >
              <FaChevronRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
