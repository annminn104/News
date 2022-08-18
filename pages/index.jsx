import React from "react";

import { Banner } from "../components/banner";
import { ContactMe } from "../components/contact-me";
import { PopularPosts } from "../components/popular-posts";

import { getBanner, getSocialMedia, getPopularPosts } from "../services/graphql.service";

export default function Home({ banner, socials, popularPosts }) {
  return (
    <React.Fragment>
      <div className="container mx-auto  bg-yellow-50">
        <Banner banner={banner} />
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8">
            <ContactMe socials={socials} />
            <PopularPosts popularPosts={popularPosts} />
          </div>
          <div className="lg:col-span-8 col-span-1 px-4 lg:px-8">Content</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const [banner, socials, popularPosts] = await Promise.all([getBanner(), getSocialMedia(), getPopularPosts()]);
  return {
    props: {
      banner,
      socials,
      popularPosts,
    },
  };
}
