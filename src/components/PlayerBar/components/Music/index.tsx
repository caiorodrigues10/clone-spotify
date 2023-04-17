import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface MusicInfoProps {
  author: string;
  name: string;
  srcImg: string;
  liked: boolean;
  setLike: (value: boolean) => void;
  className?: string;
}

export const MusicInfo: FC<MusicInfoProps> = ({
  author,
  srcImg,
  name,
  liked,
  setLike,
  className,
}) => {
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      <Image src={srcImg} alt={name} width={60} height={60} />
      <div className="flex flex-col gap-0.5">
        <text className="font-semibold text-gray-300 text-xs hover:underline cursor-pointer">
          {name}
        </text>
        <text className="text-[10px] text-zinc-500 hover:underline hover:text-zinc-400 cursor-pointer">
          {author}
        </text>
      </div>
      {liked ? (
        <AiFillHeart
          onClick={() => setLike(false)}
          className="text-green-400 cursor-pointer"
          size="20px"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setLike(true)}
          className="text-gray-400 cursor-pointer"
          size="20px"
        />
      )}
    </div>
  );
};
