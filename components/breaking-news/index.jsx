import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <React.Fragment>
      <div className="relative py-3 pl-0 pr-4 lg:px-8">
        <div className="absolute z-10 top-0 flex items-center px-4 bg-gradient-to-r from-orange-400 to-amber-200 w-[11.2rem] h-full" style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}>
          <h4 className="font-semibold text-white uppercase">Breaking News</h4>
        </div>
        <Marquee speed={20} pauseOnHover={true} pauseOnClick={true} className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam non rem accusamus ipsum recusandae earum obcaecati assumenda tempora. Asperiores distinctio officiis molestias unde
          ipsam, ex, maxime magni necessitatibus quidem quibusdam itaque, commodi eligendi. Ut quibusdam maxime quidem recusandae exercitationem deserunt labore! Quasi, dolor magnam iste, consequatur
          modi delectus voluptas alias repellat ad necessitatibus odit! Architecto?
        </Marquee>
      </div>
    </React.Fragment>
  );
};

export { BreakingNews };
