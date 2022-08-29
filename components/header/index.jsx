import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

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
    if (window.innerWidth < 767) {
      setIsMobile(true);
      setIsMenu(false);
    } else {
      setIsMobile(false);
      setIsMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <React.Fragment>
      <nav className="fixed bg-rose-50 py-2.5 w-full z-50 top-0 left-0 shadow-sm shadow-gray-300 dark:bg-gray-500 dark:shadow-white header">
        <div className="container flex flex-wrap justify-between items-center mx-auto px-4 lg:px-8">
          <Link href="/">
            <a className="cursor-pointer font-bold text-3xl text-amber-600 hover:text-rose-600">News</a>
          </Link>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <span className="dark:hidden flex gap-2 items-center">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-amber-400/20 stroke-amber-600"></path>
                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-amber-500"></path>
              </svg>
              <p className="text-sm font-medium text-amber-600">Light</p>
            </span>
            <span className="hidden dark:flex gap-2 items-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  className="fill-amber-500"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="fill-amber-500"
                ></path>
              </svg>
              <p className="text-sm font-medium">Dark</p>
            </span>
          </button>
          <div className={`${isMenu ? "" : "hidden"} ${isMobile ? "absolute top-14 left-0 w-screen" : ""}`}>
            <ul
              className={`flex py-2 gap-x-8 md:py-0 md:static bg-white w-full md:w-auto md:bg-transparent flex-col md:flex-row items-center ${
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
            </ul>
          </div>
          <button onClick={handleShowMenu} className={`h-6 w-6 ${isMobile ? "block" : "hidden"}`}>
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
