import { FC } from "react";
import { TbDevices2, TbMicrophone2 } from "react-icons/tb";
import { BsList } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";
import { CgArrowsExpandRight } from "react-icons/cg";
import { ProgressBar } from "@/components/ProgressBar";
import clsx from "clsx";

interface MenuPlayerProps {
  className?: string;
}

export const MenuPlayer: FC<MenuPlayerProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex  gap-4 text-zinc-400 items-center text-lg",
        className
      )}
    >
      <TbMicrophone2 className="hover:text-white cursor-pointer" />
      <BsList className="hover:text-white cursor-pointer" />
      <TbDevices2 className="hover:text-white cursor-pointer" />
      <HiSpeakerWave className="hover:text-white cursor-pointer" />
      <div className="w-28">
        <ProgressBar range={40} />
      </div>
      <CgArrowsExpandRight className="hover:text-white cursor-pointer" />
    </div>
  );
};
