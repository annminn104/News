import React from "react";
import { useRouter } from "next/router";

const FacebookAction = ({ href, numPosts, width }) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="break-words text-ellipsis overflow-hidden">
        <div className="fb-like" data-href={process.env.NEXT_PUBLIC_VERCEL_URI + router.asPath} data-layout="box_count" data-action="like" data-size="small" data-share="true"></div>
        <div className="fb-comments" data-href={process.env.NEXT_PUBLIC_VERCEL_URI + router.asPath} data-numposts={numPosts} data-width={width}></div>
      </div>
    </React.Fragment>
  );
};

export { FacebookAction };
