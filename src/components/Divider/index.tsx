import clsx from "clsx";
import { FC } from "react";

interface DividerProps {
  size?: "sm" | "md" | "lg";
  position?: "horizontal" | "vertical";
  className?: string;
}

export const Divider: FC<DividerProps> = ({
  size = "md",
  position = "horizontal",
  className,
}) => {
  return (
    <div
      className={clsx(
        position === "vertical"
          ? {
              "h-full w-2": size === "sm",
              "h-full w-3": size === "md",
              "h-full w-4": size === "lg",
            }
          : {
              "w-full h-[1px]": size === "sm",
              "w-full h-[2px]": size === "md",
              "w-full h-[3px]": size === "lg",
            },
        className
      )}
    />
  );
};
