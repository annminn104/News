import React, { useEffect, useState } from "react";

import { getMusics } from "../../services/graphql.service";
import { Musics } from "./_context";
import { DetailMusic } from "./_detail-music";
import { ListMusics } from "./_list-music";

const MusicApp = () => {
  const [musics, setMusics] = useState([]);
  const [currentMusic, setCurrentMusic] = useState();
  const [indexMusic, setIndexMusic] = useState(0);
  const [settingMusic, setSettingMusic] = useState(false);

  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    try {
      const resMusic = await getMusics();
      await setMusics(resMusic);
      await setCurrentMusic(resMusic[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetMusic = (idMusic) => {
    const music = musics.find((v, index) => index === idMusic);
    if (!music) {
      setCurrentMusic(musics[0]);
      setIndexMusic(0);
    } else {
      setCurrentMusic(music);
      const index = musics.findIndex((v, index) => index === idMusic);
      setIndexMusic(index);
    }
  };

  const handleSettingMusic = (event) => {
    setSettingMusic(!settingMusic);
  };

  return (
    <React.Fragment>
      {musics && (
        <Musics.Provider value={{ musics, currentMusic, indexMusic, handleSetMusic, settingMusic }}>
          <div className="fixed z-50 right-0 bottom-0 h-auto lg:right-8 lg:top-auto lg:bottom-8 w-screen sm:w-[30rem] border">
            <div className={`bg-emerald-100  ${settingMusic ? "py-4" : ""}`} style={{ maxHeight: `${settingMusic ? "50rem" : "auto"}` }}>
              <button className="absolute top-2 left-2" onClick={handleSettingMusic}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 hover:text-amber-600 ${settingMusic ? "rotate-0" : "rotate-180"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <DetailMusic />
              <ListMusics />
            </div>
          </div>
        </Musics.Provider>
      )}
    </React.Fragment>
  );
};

export { MusicApp };
