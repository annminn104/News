import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleWidthSize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
      setIsMenu(false);
    } else {
      setIsMobile(false);
      setIsMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthSize);
  });

  useEffect(() => {
    return () => {
      if (window.innerWidth < 767) {
        setIsMobile(true);
        setIsMenu(false);
      } else {
        setIsMobile(false);
        setIsMenu(true);
      }
    };
  }, []);

  const handleShowMenu = () => {
    setIsMenu(!isMenu);
  };

  const router = useRouter();

  return (
    <React.Fragment>
      <nav className="fixed bg-zinc-200 to-blue-100 py-2.5 w-full z-50 top-0 left-0 shadow-sm shadow-gray-300 header">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-4 lg:px-8">
          <Link href="/">
            <a className="cursor-pointer font-bold text-3xl text-amber-600 hover:text-rose-600">News</a>
          </Link>
          <div className={`${isMenu ? "block" : "hidden"}`}>
            <ul
              className={`flex py-2 gap-x-8 md:py-0 absolute md:static top-14 left-0 bg-white w-full md:w-auto md:bg-transparent flex-col md:flex-row items-center ${
                isMobile ? "border-b border-amber-400 shadow-lg shadow-amber-300/20" : ""
              } header-list`}
            >
              <li
                className={`py-2 md:py-auto px-4 md:px-0 hover:bg-amber-100 md:text-amber-500 md:hover:text-rose-600 md:hover:bg-transparent w-full text-center ${
                  router.pathname == "/" ? "header-item-active" : ""
                }`}
              >
                <Link href="/">
                  <a className="font-semibold">Home</a>
                </Link>
              </li>
              <li className="py-2 px-4 md:px-0 hover:bg-amber-100 md:text-amber-500 md:hover:text-rose-600 md:hover:bg-transparent w-full text-center">
                <a className="font-semibold">About</a>
              </li>
              <li className="py-2 px-4 md:px-0 hover:bg-amber-100 md:text-amber-500 md:hover:text-rose-600 md:hover:bg-transparent w-full text-center">
                <a className="font-semibold">Category</a>
              </li>
              <li className="py-2 px-4 md:px-0 hover:bg-amber-100 md:text-amber-500 md:hover:text-rose-600 md:hover:bg-transparent w-full text-center">
                <a className="font-semibold">Contact</a>
              </li>
            </ul>
          </div>
          <button onClick={handleShowMenu} className={`${isMobile ? "block" : "hidden"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-amber-600 hover:text-red-600 ${isMenu ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-amber-600 hover:text-red-600 ${isMenu ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export { Header };
