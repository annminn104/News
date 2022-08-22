import React from "react";
import { NextSeo } from "next-seo";

import "react-h5-audio-player/lib/styles.css";
import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/sass/index.scss";

import { Layout } from "../components/layout";
import { MusicApp } from "../components/music-app";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NextSeo title="News" />
      <Layout>
        <Component {...pageProps} className="z-20" />
      </Layout>
      <MusicApp />
    </React.Fragment>
  );
}
