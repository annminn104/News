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
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) {
      return () => {
        fetchData();
      };
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const resMusic = await getMusics();
      setMusics(resMusic);
      setCurrentMusic(resMusic[0]);
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
        <Musics.Provider value={{ musics, currentMusic, indexMusic, handleSetMusic }}>
          <div
            className={`fixed justify-center z-50 right-0 bottom-0 lg:right-8 lg:top-auto lg:bottom-8 bg-white ${
              settingMusic ? "w-screen sm:w-[30rem] border rounded-b-none" : "rounded-2xl"
            } music-app`}
          >
            <div className={`${settingMusic ? "py-4 max-h-[50rem] " : "py-0"} music-app-container`}>
              <button className={`absolute top-2 left-2 ${settingMusic ? "" : "hidden"}`} onClick={handleSettingMusic}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500 hover:text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div className={`${settingMusic ? "" : "hidden"}`}>
                <DetailMusic />
                <ListMusics />
              </div>
              <button onClick={handleSettingMusic} className={`${settingMusic ? "hidden" : "block"}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 p-2 mb-0 text-rose-500 bg-white hover:bg-rose-500 border hover:text-white rounded-2xl"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Musics.Provider>
      )}
    </React.Fragment>
  );
};

export { MusicApp };
