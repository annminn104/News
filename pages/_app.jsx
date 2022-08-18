import React, { useState } from "react";
import { NextSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/sass/index.scss";

import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NextSeo title="News" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default MyApp;
