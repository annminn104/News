import React from "react";
import Image from "next/image";
import moment from "moment";

const LastestUpdate = ({ lastestUpdate }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-cyan-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-cyan-600 inline-block px-4 mb-4">Lastest Update</h3>
        <a className="absolute right-0 top-1 cursor-pointer hover:text-cyan-500 uppercase text-sm font-semibold">View All</a>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          {lastestUpdate.map((post) => (
            <div key={post.id} className="pb-2 border-b border-zinc-300 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4">
              <div className="lg:col-span-5 col-span-1 relative h-[12rem]">
                <Image src={post.featuredImage.url} layout="fill" alt="" className="object-cover" />
              </div>
              <div className="lg:col-span-7 col-span-1 flex flex-col justify-center">
                <h4 className="lg:text-xl font-bold line-clamp-2 lg:mb-2">{post.title}</h4>
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-semibold">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                  <div className="flex gap-2">
                    {post.categories.map((category) => (
                      <div key={category.id} className="flex gap-1 items-center">
                        <p className="text-xs bg-zinc-200 py-1 px-2 rounded-xl">{category.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm line-clamp-3 text-gray-500">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export { LastestUpdate };
