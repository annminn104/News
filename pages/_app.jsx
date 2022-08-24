import React from "react";

import "react-h5-audio-player/lib/styles.css";
import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/sass/index.scss";

import { Layout } from "../components/layout";

import { SEO } from "../components/seo";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <SEO />
      <Layout>
        <Component {...pageProps} className="z-20" />
      </Layout>
    </React.Fragment>
  );
}
