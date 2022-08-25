import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";

import { Musics } from "./_context";

const ListMusics = () => {
  const { musics, handleSetMusic, currentMusic } = useContext(Musics);
  const [idSong, setIdSong] = useState(0);

  const handleMusics = (idSong) => {
    setIdSong(idSong);
    handleSetMusic(idSong);
  };

  return (
    <React.Fragment>
      <div className="max-h-[16rem] overflow-y-auto scroll-smooth">
        {musics.map((music, index) => (
          <div key={music.id}>
            <div onClick={() => handleMusics(index)} className="flex gap-2 items-center py-2 border-b border-zinc-300 hover:bg-white px-4 hover:text-amber-500 cursor-pointer" role="button">
              <p className={`${currentMusic.id == music.id ? "text-rose-500" : ""}`}>{index + 1}</p>
              <div className="relative w-[6rem] h-[4rem]">
                <Image src={music.image.url} layout="fill" alt={music.title} className="object-cover rounded-lg" />
              </div>
              <div>
                <h5 className={`font-semibold ${currentMusic.id == music.id ? "text-rose-500" : ""}`}>{music.title}</h5>
                <p className="text-xs text-gray-500">{music.artist}</p>
              </div>
              {/* <p className="ml-auto">time</p> */}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export { ListMusics };
