import clsx from "clsx";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { AiOutlineSound } from "react-icons/ai";
import { HiArrowSmDown } from "react-icons/hi";

interface ItemMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
  className?: string;
  children?: ReactNode;
  download?: boolean;
  play?: boolean;
}

export const ItemMenu: FC<ItemMenuProps> = ({
  active,
  className,
  children,
  download,
  play,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "flex gap-4 items-center text-sm w-full",
        {
          "text-gray-100": active,
          "text-zinc-400": !active,
          "justify-between": download || play,
        },
        className
      )}
      {...props}
    >
      {children}
      {play ? (
        <div className="rounded-full flex justify-center items-center text-green-400 ">
          <AiOutlineSound size="14px" />
        </div>
      ) : (
        <div
          className={clsx(
            "h-3 w-3 rounded-full flex justify-center items-center bg-green-400 text-black",
            {
              hidden: !download,
            }
          )}
        >
          <HiArrowSmDown size="10px" />
        </div>
      )}
    </button>
  );
};
