import React from "react";
import Image from "next/image";
import moment from "moment";

const LastestUpdate = ({ lastestUpdate }) => {
  console.log(lastestUpdate);
  return (
    <React.Fragment>
      <div className="border-t-2 border-cyan-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-cyan-600 inline-block px-4 mb-4">Lastest Update</h3>
        <a className="absolute right-0 top-1 cursor-pointer hover:text-cyan-500 uppercase text-sm font-semibold">View All</a>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          {lastestUpdate.map((post) => (
            <div key={post.id} className="py-2 border-b border-zinc-300 flex flex-row gap-2 lg:gap-4 justify-between">
              <div className="relative w-2/5 h-20 lg:h-[12rem]">
                <Image src={post.featuredImage.url} layout="fill" alt="" />
              </div>
              <div className="w-3/5 flex flex-col justify-center">
                <h3 className="lg:text-xl font-bold line-clamp-2 lg:mb-2">{post.title}</h3>
                <div className="flex gap-2 items-center">
                  <p className="text-xs font-semibold">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                  <div className="flex gap-2">
                    {post.categories.map((category) => (
                      <div key={category.id} className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                          />
                        </svg>
                        <p className="text-xs ">{category.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="hidden lg:block text-sm lg:line-clamp-3 text-gray-500">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export { LastestUpdate };
