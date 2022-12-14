import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const LastestNews = ({ lastestNews }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-violet-600 mb-8 relative">
        <h3 className="text-lg font-bold uppercase text-white bg-violet-600 inline-block px-4 mb-4">Lastest News</h3>
        <Link href="/">
          <a className="absolute right-0 top-1 cursor-pointer hover:text-violet-500 uppercase text-sm font-semibold">View All</a>
        </Link>
        <ul>
          {lastestNews.map((post) => (
            <li key={post.id}>
              <div className="grid grid-cols-12 gap-2 lg:gap-4 py-2 first:pt-0 border-b mb-2 border-zinc-300">
                <div className="col-span-4">
                  <Link href={post.slug}>
                    <a className="block relative h-[10rem] dark:border">
                      <Image src={post.featuredImage.url} layout="fill" alt={post.title} className="lef-0 object-cover" />
                    </a>
                  </Link>
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 relative">
                      <Image src={post.author.photo.url} layout="fill" alt={post.title} className="object-cover rounded-full" />
                    </div>
                    <p className="text-sm font-medium" data-tip={post.author.name}>
                      {post.author.name}
                    </p>
                  </div>
                  <Link href={post.slug}>
                    <a className="hover:text-rose-600">
                      <h4 className="md:text-xl font-semibold line-clamp-2 mb-1">{post.title}</h4>
                    </a>
                  </Link>
                  <p className="text-xs md:text-sm line-clamp-2 text-gray-500 mb-1">{post.excerpt}</p>
                  <p className="text-xs font-medium text-slate-600 capitalize">{moment(post.createdAt).startOf("hour").fromNow() + " ??? " + moment(post.createdAt).format("MMM DD, YYYY")}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export { LastestNews };
