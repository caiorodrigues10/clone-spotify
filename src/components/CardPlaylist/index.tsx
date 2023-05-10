import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ButtonPlay } from "../ButtonPlay";

interface CardPlaylistProps {
  name: string;
  play?: boolean;
  className?: string;
}

export const CardPlaylist: FC<CardPlaylistProps> = ({
  name,
  play = false,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex bg-zinc-800 items-center justify-between pr-4 hover:bg-zinc-700 rounded-md duration-200 group w-full cursor-pointer",
        className
      )}
    >
      <div className="flex gap-4 items-center w-3/4">
        <Image
          src="/images/capa.jpg"
          alt="capa"
          height={75}
          width={75}
          className="rounded-l-md "
          style={{ boxShadow: "5px 0px 15px #1f1f1f" }}
        />
        <text className="font-semibold text-zinc-200 truncate">{name}</text>
      </div>
      <ButtonPlay play={play} />
    </div>
  );
};
