import React from "react";

import { Banner } from "../components/banner";
import { ContactMe } from "../components/contact-me";
import { PopularPost } from "../components/popular-post";
import { FeaturedNews } from "../components/featured-news";
import { DontMiss } from "../components/dont-miss";
import { LastestUpdate } from "../components/lastest-update";
import { LastestNews } from "../components/lastest-news";
import { BreakingNews } from "../components/breaking-news";

import { getBanner, getSocialMedia, getPopularPost, getFeaturedNews, getDontMiss, getLastestUpdate, getLastestNews } from "../services/graphql.service";

export default function Home({ banner, socials, popularPost, lastestNews, featuredNews, dontMiss, lastestUpdate }) {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <BreakingNews />
        <Banner banner={banner} />
        <div className="grid grid-cols-1 lg:grid-cols-12 z-20">
          <div className="lg:col-span-4 col-span-1 px-4 lg:px-8 border-r border-zinc-300  lg:order-1 order-2">
            <div className="relative lg:sticky lg:top-20">
              <ContactMe socials={socials} />
              <PopularPost popularPost={popularPost} />
            </div>
          </div>
          <div className="lg:col-span-8 col-span-1 px-4 lg:px-8 lg:order-2 order-1">
            <LastestNews lastestNews={lastestNews} />
            <FeaturedNews featuredNews={featuredNews} />
            <DontMiss dontMiss={dontMiss} />
            <LastestUpdate lastestUpdate={lastestUpdate} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  const [banner, socials, popularPost, featuredNews, dontMiss, lastestUpdate, lastestNews] = await Promise.all([
    getBanner(),
    getSocialMedia(),
    getPopularPost(),
    getFeaturedNews(),
    getDontMiss(),
    getLastestUpdate(),
    getLastestNews(),
  ]);

  return {
    props: {
      banner,
      socials,
      popularPost,
      lastestNews,
      featuredNews,
      dontMiss,
      lastestUpdate,
    },
  };
}
