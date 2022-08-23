import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";

const PopularPost = ({ popularPost }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-black mb-8">
        <h3 className="text-lg font-bold uppercase text-white bg-black inline-block px-4 mb-4">Popular Post</h3>
        <div className="grid grid-cols-1">
          <div className="mb-2">
            <div className="flex gap-4 h-[20rem] relative">
              <Link href={popularPost[0].slug}>
                <a className="h-[16rem] w-full relative block">
                  <Image src={popularPost[0].featuredImage.url} layout="fill" alt={popularPost[0].name} className="object-cover" />
                </a>
              </Link>
              <div className="absolute left-0 bottom-0 px-4 py-2 w-full backdrop-blur-md bg-white/20">
                <div className="flex justify-between mb-1/2 gap-2">
                  <p className="text-sm font-semibold">{popularPost[0].author.name}</p>
                  <p className="text-sm">{moment(popularPost[0].createdAt).format("MMM DD, YYYY")}</p>
                </div>
                <Link href={popularPost[0].slug}>
                  <a className="hover:text-rose-600">
                    <h4 className="font-bold lg:text-xl text-center line-clamp-2">{popularPost[0].title}</h4>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <ul>
            {popularPost.slice(1).map((post) => (
              <li key={post.id} className="py-2 border-b border-zinc-300">
                <div className="grid grid-cols-12 gap-2 items-center">
                  <Link href={post.slug}>
                    <a className="col-span-4 lg:col-span-5 h-[7rem] relative border border-red-100">
                      <Image src={post.featuredImage.url} layout="fill" alt={post.name} className="object-cover" />
                    </a>
                  </Link>
                  <div className="col-span-8 lg:col-span-7 w-full">
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
      </div>
    </React.Fragment>
  );
};

export { PopularPost };
