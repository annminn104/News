import React from "react";

import { Header } from "../header";
import { Footer } from "../footer";
import { MusicApp } from "../music-app";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="mt-[3.5rem] md:mt-[3.7rem]">{children}</main>
      <Footer />
      <MusicApp />
    </React.Fragment>
  );
};

export { Layout };
