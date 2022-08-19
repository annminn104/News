import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const FeaturedNews = ({ featuredNews }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-rose-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-rose-600 inline-block px-4 mb-4">Featured News</h3>
        <a className="absolute right-0 top-1 cursor-pointer hover:text-red-500 uppercase text-sm font-semibold">View All</a>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          <div className="lg:col-span-6 col-span-1 border-b border-zinc-300 pb-2">
            <div className="relative h-[24rem] lg:h-[18rem] mb-2">
              <Image src={featuredNews[0].featuredImage.url} layout="fill" alt="" className="object-cover" />
            </div>
            <div className="">
              <h4 className="text-xl font-bold mb-2 line-clamp-2">{featuredNews[0].title}</h4>
              <div className="flex justify-between mb-2">
                <p className="text-sm font-semibold">{featuredNews[0].author.name}</p>
                <p className="text-sm text-gray-500">{moment(featuredNews[0].createdAt).format("MMM DD, YYYY")}</p>
              </div>
              <p className="line-clamp-3 text-gray-500">{featuredNews[0].excerpt}</p>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-1 grid grid-rows-4 lg:grid-rows-2 grid-flow-col gap-2 lg:gap-4">
            {featuredNews.slice(1).map((post) => (
              <div key={post.id} className="border-b border-zinc-300 flex lg:block gap-2 pb-2 lb:pb-0">
                <div className="relative w-52 h-20 object-cover lg:w-full lg:h-3/5">
                  <Image src={post.featuredImage.url} layout="fill" alt="" />
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mb-1 line-clamp-2">{post.title}</h4>
                  <p className="text-xs text-gray-500">{moment(featuredNews[0].createdAt).format("MMM DD, YYYY")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { FeaturedNews };
