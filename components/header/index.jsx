import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="bg-blue-100  py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          <Link href="/">
            <a className="cursor-pointer font-bold text-3xl text-black hover:text-pink-600">News</a>
          </Link>
          <div className="text-xl">MENU</div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export { Header };
