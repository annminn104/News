import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";

import "tailwindcss/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/sass/index.scss";

import { Layout } from "../components/layout";

import ReactPlayer from "react-player";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NextSeo title="News" />
      <Layout>
        <Component {...pageProps} className="z-20" />
      </Layout>

      <div className="fixed right-0 bottom-2 lg:right-8 lg:bottom-8 w-screen lg:w-[30rem]">
        <div className="p-2 border border-amber-500 bg-amber-100">
          <h1>Music</h1>
          <div>
            <Image src="/music-player/images/01.jpg" width="200px" height="200px" alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
