import React, { useContext, useEffect } from "react";
import Image from "next/image";

import AudioPlayer from "react-h5-audio-player";
import { Musics } from "./_context";

const DetailMusic = () => {
  const { currentMusic, indexMusic, musics, handleSetMusic } = useContext(Musics);

  const handleClickNext = () => {
    const index = musics.findIndex((v, index) => index === indexMusic);
    handleSetMusic(index + 1);
  };
  const handleClickPrev = () => {
    const index = musics.findIndex((v, index) => index === indexMusic);
    handleSetMusic(index - 1);
  };

  useEffect(() => {
    getdata();
  }, [currentMusic]);

  const getdata = () => {
    setTimeout(() => {
      if (currentMusic !== undefined) {
        const data = document.getElementsByClassName("am-audio");
        const audio = data[0].querySelector("audio");
        audio.setAttribute("src", `${currentMusic.link}`);
      }
    });
  };

  const handleCompletePlay = (event) => {
    handleSetMusic(indexMusic + 1);
  };

  return (
    <React.Fragment>
      {currentMusic && (
        <div className="flex flex-col items-center mb-3">
          <Image src={currentMusic?.image?.url} width="200px" height="200px" alt="" className="rounded-xl object-cover shadow-cyan-500/50" />
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
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export { DetailMusic };
