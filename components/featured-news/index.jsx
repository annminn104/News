import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const FeaturedNews = ({ featuredNews }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-rose-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-rose-600 inline-block px-4 mb-4">Featured News</h3>
        <Link href="/">
          <a className="absolute right-0 top-1 cursor-pointer hover:text-red-500 uppercase text-sm font-semibold">View All</a>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6 col-span-1 border-b border-zinc-300 pb-2">
            <Link href={featuredNews[0].slug}>
              <a className="block relative h-[24rem] lg:h-[18rem] mb-2">
                <Image src={featuredNews[0].featuredImage.url} layout="fill" alt="" className="object-cover" />
              </a>
            </Link>
            <div className="flex flex-col gap-1 md:gap-2">
              <Link href={featuredNews[0].slug}>
                <a className="hover:text-rose-600">
                  <h4 className="md:text-xl font-bold line-clamp-2">{featuredNews[0].title}</h4>
                </a>
              </Link>
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{featuredNews[0].author.name}</p>
                <p className="text-sm text-gray-500">{moment(featuredNews[0].createdAt).format("MMM DD, YYYY")}</p>
              </div>
              <p className="text-xs line-clamp-3 text-gray-500">{featuredNews[0].excerpt}</p>
            </div>
          </div>
          <ul className="lg:col-span-6 col-span-1 grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-2 xl:gap-4">
            {featuredNews.slice(1).map((post) => (
              <li key={post.id} className="border-b border-zinc-300 grid grid-cols-12 lg:grid-cols-none lg:grid-rows-1 gap-2 pb-2 lb:pb-0">
                <Link href={post.slug}>
                  <a className="col-span-4 lg:col-span-12 h-[auto] min-h-[7rem] max-h-[8.5rem] relative">
                    <Image src={post.featuredImage.url} layout="fill" alt="" className="object-cover" />
                  </a>
                </Link>
                <div className="col-span-8 lg:col-span-12 w-full flex flex-col mb-1 justify-center">
                  <Link href={post.slug}>
                    <a className="hover:text-rose-600">
                      <h4 className="font-semibold line-clamp-2">{post.title}</h4>
                    </a>
                  </Link>
                  <p className="text-xs text-gray-500">{moment(featuredNews[0].createdAt).format("MMM DD, YYYY")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export { FeaturedNews };
