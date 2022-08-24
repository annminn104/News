import React from "react";
import { useRouter } from "next/router";

const FacebookAction = ({ href, numPosts, width }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <div>
        <div className="fb-like" data-href={process.env.NEXT_PUBLIC_VERCEL_URI + router.asPath} data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
        <div className="fb-comments" data-href={process.env.NEXT_PUBLIC_VERCEL_URI + router.asPath} data-numposts={numPosts} data-width={width}></div>
      </div>
    </React.Fragment>
  );
};

export { FacebookAction };
