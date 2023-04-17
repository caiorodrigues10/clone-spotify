import { FC } from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { IoPauseSharp } from "react-icons/io5";
import { TbRotateClockwise } from "react-icons/tb";
import { BiShuffle } from "react-icons/bi";
import { ProgressBar } from "@/components/ProgressBar";
import clsx from "clsx";

interface PlayerProps {
  className?: string;
}

export const Player: FC<PlayerProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4 text-zinc-400 items-center",
        className
      )}
    >
      <div className="flex gap-4 items-center text-xl">
        <BiShuffle className="hover:text-white cursor-pointer" />
        <CgPushChevronLeft className="hover:text-white cursor-pointer" />
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-300 text-black hover:bg-white cursor-pointer">
          <IoPauseSharp />
        </div>
        <CgPushChevronRight className="hover:text-white cursor-pointer" />
        <TbRotateClockwise className="hover:text-white cursor-pointer" />
      </div>
      <div className="flex gap-4 items-center text-xs">
        <text>1:00</text>
        <div className="w-[400px]">
          <ProgressBar range={60} maxRange={180} />
        </div>
        <text>3:00</text>
      </div>
    </div>
  );
};
