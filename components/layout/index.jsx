import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-14">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export { Layout };
