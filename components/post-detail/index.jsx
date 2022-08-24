/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import moment from "moment";
import { getContentFragment } from "../editor";

const PostDetail = ({ post }) => {
  return (
    <React.Fragment>
      <div className="my-[1.25rem] post-detail">
        <div className="h-full overflow-hidden border border-slate-300 mb-4">
          <div className="relative h-[30rem] w-full">
            <Image src={post?.featuredImage.url} layout="fill" alt="" className="object-cover" />
          </div>
        </div>
        <div className="post-detail-content">
          <div className="flex items-center justify-between mb-4 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
              <Image src={post?.author.photo.url} height="40px" width="40px" className="align-middle rounded-full" alt={post?.author.name} />
              <p className="inline align-middle text-gray-700 ml-2 font-semibold text-lg">{post?.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-gray-500">{moment(post?.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-semibold">{post?.title}</h1>
          {getContentFragment(post?.content.raw.children)}
        </div>
      </div>
    </React.Fragment>
  );
};

export { PostDetail };
