import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { ButtonPlay } from "../ButtonPlay";

interface CardArtistProps {
  name: string;
  description: string;
  imageRounded?: boolean;
  srcImg: string;
  play: boolean;
  className?: string;
}

export const CardArtist: FC<CardArtistProps> = ({
  description,
  name,
  imageRounded,
  srcImg,
  play,
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-zinc-900 hover:bg-zinc-800 duration-200 p-4 cursor-pointer flex flex-col w-[170px] gap-2 group rounded-md",
        className
      )}
    >
      <div className="relative">
        <Image
          src={srcImg}
          alt={name}
          width={140}
          height={140}
          className={imageRounded ? "rounded-full" : "rounded-md"}
        />
        <div
          className={clsx(
            "absolute bottom-0 duration-200 pr-2 justify-end flex w-full",
            {
              "group-hover:-translate-y-2": !play,
              "-translate-y-2": play,
            }
          )}
        >
          <ButtonPlay play={play} />
        </div>
      </div>
      <div className="flex flex-col pt-2">
        <text className="text-gray-200">{name}</text>
        <text className="text-sm text-zinc-500">{description}</text>
      </div>
    </div>
  );
};
