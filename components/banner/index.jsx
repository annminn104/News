import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import Link from "next/link";

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
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button className="absolute arrow-btn left-0 text-center py-5 cursor-pointer active:opacity-80 bg-slate-400 hover:bg-amber-500" onClick={() => onClick()} aria-label="left-arrow-banner">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
      <button className="absolute arrow-btn right-0 text-center py-5 cursor-pointer active:opacity-80 bg-slate-400 hover:bg-amber-500" onClick={() => onClick()} aria-label="right-arrow-banner">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  const imageBlur =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiPjxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSIxOTE2IiBoZWlnaHQ9IjEwNzYiIHN0eWxlPSJmaWxsOiNkZWRlZGU7c3Ryb2tlOiM1NTU1NTU7c3Ryb2tlLXdpZHRoOjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgYWxpZ25tZW50LWJhc2VsaW5lPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UsIHNhbnMtc2VyaWYiIGZpbGw9IiM1NTU1NTUiPmxvYWRpbmc8L3RleHQ+PC9zdmc+";

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
          sliderClass="banner-list relative"
          itemClass="flex items-center h-full"
          dotListClass="banner-item-dot"
          autoPlay={true}
        >
          {banner.map((post, index) => (
            <div className="banner-item" key={post.id}>
              <div className="absolute top-0 w-full h-full banner-item-image">
                <Image src={post.featuredImage.url} layout="fill" alt="" placeholder="blur" blurDataURL={imageBlur} />
              </div>
              <div className="banner-item-content">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-amber-500 mb-2">{post.title}</h1>
                <p className="text-sm md:text-base text-amber-500 mb-2 line-clamp-3">{post.excerpt}</p>
                <button className="text-amber-500 py-1 px-2 border-2 border-amber-500 hover:bg-amber-500 hover:text-white font-bold">
                  <Link href={post.slug}>
                    <a aria-label={post.title}>
                      READ MORE <span className="sr-only">{post.title}</span>
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export { Banner };
