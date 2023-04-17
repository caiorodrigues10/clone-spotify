"use client";
import { FC, useState } from "react";
import { MenuPlayer } from "./components/MenuPlayer";
import { MusicInfo } from "./components/Music";
import { Player } from "./components/Player";

export const PlayerBar: FC = () => {
  const [like, setLike] = useState(false);

  return (
    <div className="absolute flex items-center w-full bottom-0 h-24 bg-[#1d1d1f] p-4 justify-between border-t-2 border-zinc-700">
      <MusicInfo
        author="Toquinho"
        name="Aquarela"
        srcImg="/images/capa.jpg"
        liked={like}
        setLike={setLike}
      />
      <Player />
      <MenuPlayer />
    </div>
  );
};
