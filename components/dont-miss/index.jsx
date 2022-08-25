import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const DontMiss = ({ dontMiss }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-teal-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-teal-600 inline-block px-4 mb-4">Don&apos;t Miss</h3>
        <Link href="/">
          <a className="absolute right-0 top-1 cursor-pointer hover:text-teal-500 uppercase text-sm font-semibold">View All</a>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {dontMiss.slice(0, 2).map((post) => (
            <div key={post.id} className="lg:col-span-6 col-span-1 border ">
              <div className="flex gap-4 h-[20rem] relative">
                <Link href={post.slug}>
                  <a className="relative h-[16rem] w-full block">
                    <Image src={post.featuredImage.url} layout="fill" alt={post.title} className="object-cover" />
                    <span className="sr-only">{post.title}</span>
                  </a>
                </Link>
                <div className="absolute flex flex-col gap-1 mb:gap-2 left-0 bottom-0 px-4 py-2 w-full backdrop-blur-md bg-white/20">
                  <Link href={post.slug}>
                    <a className="hover:text-rose-600">
                      <h4 className="md:text-xl font-bold text-center line-clamp-2">{post.title}</h4>
                    </a>
                  </Link>
                  <div className="flex justify-center gap-2">
                    <p className="text-sm font-semibold">{post.author.name}</p>
                    <p className="text-sm">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="grid grid-rows-6 lg:grid-rows-3 grid-flow-col gap-x-4 my-4">
          {dontMiss.slice(2).map((post) => (
            <li key={post.id} className="py-2 border-b border-red-100">
              <div className="grid grid-cols-12 gap-2 items-center h-full w-full">
                <Link href={post.slug}>
                  <a className="col-span-4 lg:col-span-5 h-[auto] min-h-[7rem] max-h-[8.5rem] relative">
                    <Image src={post.featuredImage.url} layout="fill" alt={post.title} className="object-cover" />
                    <span className="sr-only">{post.title}</span>
                  </a>
                </Link>
                <div className="col-span-8 lg:col-span-7 flex flex-col gap-1">
                  <div className="flex lg:justify-between items-center gap-2">
                    <p className="text-xs font-semibold">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                  </div>
                  <Link href={post.slug}>
                    <a className="hover:text-rose-600">
                      <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export { DontMiss };
