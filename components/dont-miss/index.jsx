import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const DontMiss = ({ dontMiss }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-teal-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-teal-600 inline-block px-4 mb-4">Don&apos;t Miss</h3>
        <a className="absolute right-0 top-1 cursor-pointer hover:text-teal-500 uppercase text-sm font-semibold">View All</a>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {dontMiss.slice(0, 2).map((post) => (
            <div key={post.id} className="lg:col-span-6 col-span-1 border ">
              <Link href={post.slug}>
                <a className="flex gap-4 h-[20rem] relative">
                  <div className="h-[16rem] w-full relative">
                    <Image src={post.featuredImage.url} layout="fill" alt={post.title} className="object-cover" />
                  </div>
                  <div className="absolute left-0 bottom-0 px-4 py-2 w-full backdrop-blur-md bg-white/20">
                    <h4 className="text-xl font-bold text-center">{post.title}</h4>
                    <div className="flex justify-center mb-1 gap-2">
                      <p className="text-sm font-semibold line-clamp-2">{post.author.name}</p>
                      <p className="text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-rows-6 lg:grid-rows-3 grid-flow-col gap-4 my-4">
          {dontMiss.slice(2).map((post) => (
            <div key={post.id} className="pb-2 border-b border-red-100">
              <Link href={post.slug}>
                <a className="flex gap-2 items-center h-full w-full">
                  <div className="w-52 h-20 relative">
                    <Image src={post.featuredImage.url} layout="fill" alt={post.name} className="object-cover" />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between gap-2">
                      <p className="text-xs font-semibold">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                    </div>
                    <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export { DontMiss };
