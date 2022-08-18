/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import moment from "moment";

const PopularPosts = ({ popularPosts }) => {
  return (
    <React.Fragment>
      <div className="border-t-2 border-black mb-8">
        <h4 className="text-lg font-bold uppercase text-white bg-black inline-block px-4 mb-4">Popular Post</h4>
        <ul className="popular">
          {popularPosts.map((post) => (
            <li key={post.id} className="py-2 first:py-0 first:mb-4 popular-item">
              <Link href={post.slug}>
                <a className="flex gap-4 items-center popular-item-link">
                  <div className="popular-item-image">
                    <img src={post.featuredImage.url} alt="" />
                  </div>
                  <div className="popular-item-content w-full">
                    <div className="flex justify-between gap-2 popular-item-content__author">
                      <p className="text-xs">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                    </div>
                    <h5 className="font-bold text-lg">{post.title}</h5>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export { PopularPosts };
