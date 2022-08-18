import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Banner = ({ banner }) => {
  console.log(banner);

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button className="absolute arrow-btn left-0 text-center py-5 cursor-pointer active:opacity-80 bg-slate-400 hover:bg-amber-500" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button className="absolute arrow-btn right-0 text-center py-5 cursor-pointer active:opacity-80 bg-slate-400 hover:bg-amber-500" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  return (
    <React.Fragment>
      <div className="mb-10">
        <Carousel
          infinite
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          ssr={true}
          showDots={true}
          responsive={responsive}
          sliderClass="banner-list"
          itemClass="flex items-center h-full"
          dotListClass="banner-item-dot"
        >
          {banner.map((post, index) => (
            <div className="banner-item" key={post.id}>
              <Image src={post.featuredImage.url} layout="fill" alt="" />
              <div className="banner-item-content">
                <h1 className="text-4xl font-bold text-amber-500 mb-2">{post.title}</h1>
                <h2 className="text-xl font-bold text-amber-500 mb-2">{post.excerpt}</h2>
                <button className=" text-amber-500 py-1 px-2 border-2 border-amber-500 hover:bg-amber-500 hover:text-white font-bold">READ MORE</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export { Banner };
