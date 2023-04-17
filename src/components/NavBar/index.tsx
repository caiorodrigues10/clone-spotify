"use client";
import { FC, useState } from "react";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { HiArrowSmDown } from "react-icons/hi";
import { BiLibrary, BiPlus } from "react-icons/bi";
import { Divider } from "../Divider";
import { ItemMenu } from "./components/ItemsMenu";
import api from "../../../fakeApi.json";

export const NavBar: FC = () => {
  const [title, setTitle] = useState("Search");

  return (
    <nav className="bg-zinc-900 p-4 w-[400px] h-screen space-y-5">
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="flex flex-col gap-4">
        <ItemMenu
          active={title === "Home"}
          onClick={() => setTitle("Home")}
          className="group"
        >
          <AiFillHome size="24px" />
          <text className="group-hover:text-gray-100 duration-200">Home</text>
        </ItemMenu>
        <ItemMenu
          active={title === "Search"}
          onClick={() => setTitle("Search")}
          className="group"
        >
          <CgSearch size="24px" />
          <text className="group-hover:text-gray-100 duration-200">Search</text>
        </ItemMenu>
        <ItemMenu
          active={title === "Library"}
          onClick={() => setTitle("Library")}
          className="group"
        >
          <BiLibrary size="24px" />
          <text className="group-hover:text-gray-100 duration-200">
            Your Library
          </text>
        </ItemMenu>
      </nav>
      <nav className="flex flex-col gap-4 pt-6">
        <ItemMenu
          active={title === "Create"}
          onClick={() => setTitle("Create")}
          className="group"
        >
          <div className="bg-zinc-400 flex justify-center items-center h-7 w-7 rounded-sm text-black">
            <BiPlus size="16px" />
          </div>
          <text className="group-hover:text-gray-100 duration-200">
            Create Playlist
          </text>
        </ItemMenu>
        <ItemMenu
          active={title === "Library"}
          onClick={() => setTitle("Library")}
          className="group"
        >
          <div className="bg-gradient-to-tl from-zinc-500 to-indigo-800 flex justify-center items-center h-7 w-7 rounded-sm text-white">
            <AiFillHeart size="16px" />
          </div>
          <text className="group-hover:text-gray-100 duration-200">
            Liked Songs
          </text>
        </ItemMenu>
      </nav>
      <Divider className="bg-zinc-800" />
      <nav className="flex flex-col gap-3 max-h-[66%] pr-2 -mr-3 overflow-y-auto scrollbar">
        {api.map((playlist) => (
          <ItemMenu
            key={playlist.id}
            active={title === playlist.id}
            onClick={() => setTitle(playlist.id)}
            className="group"
            play={playlist.play}
            download={playlist.download}
          >
            <text className="group-hover:text-gray-100 duration-200 truncate">
              {playlist.name}
            </text>
          </ItemMenu>
        ))}
      </nav>
    </nav>
  );
};
