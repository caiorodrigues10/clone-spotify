import clsx from "clsx";
import { FC } from "react";

interface ProgressBarProps {
  maxRange?: number;
  range: number;
  colorBar?: string;
  colorProgress?: string;
  size?: "sm" | "md" | "lg";
}

export const ProgressBar: FC<ProgressBarProps> = ({
  range,
  maxRange = 100,
  colorProgress = "bg-zinc-300",
  colorBar = "bg-zinc-700",
  size = "md",
}) => {
  const percentBar = (range * 100) / maxRange;

  return (
    <div className="w-full relative">
      <div
        className={clsx(`w-full absolute rounded-xl ${colorBar}`, {
          "h-[3px]": size === "sm",
          "h-[4px]": size === "md",
          "h-[5px]": size === "lg",
        })}
      />
      <div
        className={clsx(`relative ${colorProgress} rounded-xl`, {
          "h-[3px]": size === "sm",
          "h-[4px]": size === "md",
          "h-[5px]": size === "lg",
        })}
        style={{ width: `${percentBar}%` }}
      />
    </div>
  );
};
