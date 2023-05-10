import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPauseSharp } from "react-icons/io5";

interface ButtonPlayProps {
  play: boolean;
}

export const ButtonPlay: FC<ButtonPlayProps> = ({ play }) => {
  return play ? (
    <div className="flex justify-center items-center h-12 w-12 bg-green-500 hover:bg-green-400 text-zinc-900 shadow-md rounded-full duration-200 group-hover:duration-200 hover:scale-105 cursor-pointer">
      <IoPauseSharp size="20px" />
    </div>
  ) : (
    <div className="flex justify-center items-center h-12 w-12 bg-green-500 hover:bg-green-400 text-zinc-900 shadow-md rounded-full group-hover:opacity-100 opacity-0 duration-200 group-hover:duration-200 hover:scale-105 cursor-pointer">
      <FaPlay size="20px" />
    </div>
  );
};
