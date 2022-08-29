import React from "react";
import Image from "next/image";
import moment from "moment";
import { getContentFragment } from "../editor";

const PostDetail = ({ post }) => {
  return (
    <React.Fragment>
      <div className="my-[1.25rem] post-detail">
        <div className="relative h-[30rem] w-full mb-4 dark:border">
          <Image src={post.featuredImage.url} layout="fill" alt="" className="object-cover" />
        </div>
        <div className="post-detail-content">
          <div className="flex items-center justify-between mb-2 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
              <Image src={post.author.photo.url} height="40px" width="40px" className="align-middle rounded-full" alt={post.author.name} />
              <p className="inline align-middle text-gray-700 ml-2 font-semibold text-lg dark:text-white">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle text-gray-500">{moment(post?.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center mb-2 break-words text-ellipsis overflow-hidden">
            {post.categories.map((category) => (
              <div key={category.id} className="flex gap-1 items-center bg-zinc-200 py-1 px-2 rounded-2xl hover:text-rose-500 dark:text-black dark:hover:text-white dark:hover:bg-rose-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                </svg>
                <p className="">{category.name}</p>
              </div>
            ))}
          </div>
          <h1 className="mb-4 text-3xl font-semibold">{post?.title}</h1>
          <div className="break-words text-ellipsis overflow-hidden">{getContentFragment(post.content.raw.children)}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { PostDetail };
