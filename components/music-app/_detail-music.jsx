import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import AudioPlayer from "react-h5-audio-player";
import { Musics } from "./_context";

const DetailMusic = () => {
  const { currentMusic, indexMusic, musics, handleSetMusic, setIsPlaying } = useContext(Musics);
  const [isStop, setIsStop] = useState(false);

  const handleClickNext = () => {
    const index = musics.findIndex((v, index) => index === indexMusic);
    handleSetMusic(index + 1);
  };
  const handleClickPrev = () => {
    const index = musics.findIndex((v, index) => index === indexMusic);
    handleSetMusic(index - 1);
  };

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) {
      return () => {
        handleInitAudio();
      };
    } else {
      handleInitAudio();
    }
  });

  const handleInitAudio = () => {
    if (currentMusic !== undefined) {
      const data = document.getElementsByClassName("am-audio");
      const audio = data[0].querySelector("audio");
      if (!audio.getAttribute("src")) {
        audio.setAttribute("src", `${currentMusic.link}`);
      }
    }
  };

  const handleCompletePlay = (event) => {
    handleSetMusic(indexMusic + 1);
  };

  const handlePlaying = (event) => {
    setIsPlaying(true);
    setIsStop(true);
  };

  const handlePause = (event) => {
    setIsPlaying(false);
    setIsStop(false);
  };

  return (
    <React.Fragment>
      {currentMusic && (
        <div className="flex flex-col items-center mb-3">
          <div className="w-72 h-72 bg-transparent">
            <svg viewBox="0 0 500 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="288px" height="288px" id="blobSvg">
              <defs>
                <clipPath id="shape">
                  {isStop ? (
                    <path className="blob" fill="#d1d8e0">
                      <animate
                        attributeName="d"
                        dur="1300ms"
                        repeatCount="indefinite"
                        values="M443.5,317.5Q436,385,378.5,426Q321,467,262,430.5Q203,394,159.5,371Q116,348,91,299Q66,250,81.5,194.5Q97,139,146.5,111Q196,83,249.5,85Q303,87,338.5,123.5Q374,160,412.5,205Q451,250,443.5,317.5Z;
                      M468,320.5Q445,391,377,411.5Q309,432,242.5,455.5Q176,479,145,414Q114,349,74,299.5Q34,250,78,203.5Q122,157,157,114.5Q192,72,255,56Q318,40,374,79.5Q430,119,460.5,184.5Q491,250,468,320.5Z;
                      M426,313.5Q425,377,372.5,422Q320,467,256,448Q192,429,146,394Q100,359,59,304.5Q18,250,43.5,184Q69,118,133.5,104Q198,90,251.5,85Q305,80,355.5,108Q406,136,416.5,193Q427,250,426,313.5Z;
                      M472.5,321.5Q447,393,373,397Q299,401,246,413Q193,425,130,404Q67,383,41.5,316.5Q16,250,42.5,184Q69,118,132.5,101Q196,84,251.5,78.5Q307,73,359,103Q411,133,454.5,191.5Q498,250,472.5,321.5Z;
                      M413.5,298Q383,346,352,407.5Q321,469,262,432.5Q203,396,142.5,384Q82,372,65,311Q48,250,76.5,197.5Q105,145,154.5,126Q204,107,253,98Q302,89,342.5,121Q383,153,413.5,201.5Q444,250,413.5,298Z;
                      M427.5,316Q432,382,373,414.5Q314,447,257.5,423.5Q201,400,161,371.5Q121,343,79,296.5Q37,250,46,179.5Q55,109,123,88.5Q191,68,249,71Q307,74,358.5,104Q410,134,416.5,192Q423,250,427.5,316Z;"
                      ></animate>
                    </path>
                  ) : (
                    <path
                      className="blob"
                      d="M416,303.5Q398,357,357.5,407Q317,457,253.5,446Q190,435,128,409.5Q66,384,45.5,317Q25,250,52.5,188.5Q80,127,141.5,116Q203,105,254,92.5Q305,80,368.5,99Q432,118,433,184Q434,250,416,303.5Z"
                      fill="#d1d8e0"
                    ></path>
                  )}
                </clipPath>
              </defs>
              <image x="0" y="0" width="100%" height="100%" clipPath="url(#shape)" className="object-cover" xlinkHref={currentMusic?.image?.url} preserveAspectRatio="none"></image>
            </svg>
          </div>
          <h4 className="text-2xl font-semibold">{currentMusic?.title}</h4>
          <p className="text-sm text-gray-500">{currentMusic?.artist}</p>
          <div className="w-full ">
            <AudioPlayer
              src={currentMusic?.link}
              layout="stacked-reverse"
              showSkipControls={true}
              showJumpControls={false}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrev}
              volume={0.1}
              className="am-audio"
              onEnded={handleCompletePlay}
              autoPlay={true}
              onPlaying={handlePlaying}
              onPause={handlePause}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { DetailMusic };
