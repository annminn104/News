import React from "react";
import Link from "next/link";
import Head from "next/head";

import Lottie from "lottie-react";
import animation404 from "../public/lottifiles/404.json";

export default function FourOhFour() {
  return (
    <React.Fragment>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404 Not Found" />
      </Head>
      <div className="container mx-auto text-center relative py-6 dark:bg-slate-900">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">404 - Not Found</h1>
        <button className="animate-bounce bg-blue-400 py-1.5 px-4 rounded-lg text-white mb-4 hover:shadow-lg hover:shadow-blue-400/50">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </button>
        <Lottie animationData={animation404} loop={true} className="not-found" />
      </div>
    </React.Fragment>
  );
}
