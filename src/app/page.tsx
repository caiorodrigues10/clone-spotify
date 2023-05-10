import { CardArtist } from "@/components/CardArtist";
import { CardPlaylist } from "@/components/CardPlaylist";
import { NavBar } from "@/components/NavBar";
import { PlayerBar } from "@/components/PlayerBar";
import Image from "next/image";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import api from "../../fakeApi.json";
import apiArtist from "../../artistApi.json";

export default function Home() {
  return (
    <main className="w-screen h-screen flex bg-gradient-to-t to-[#2d1039] via-black from-black ">
      <NavBar />
      <section className="flex flex-col pt-4 px-8 w-full space-y-6">
        <header className="flex w-full justify-between items-center">
          <div className="flex gap-4">
            <div className="h-8 w-8 flex items-center justify-center pr-0.5 text-zinc-500 bg-zinc-900 rounded-full">
              <BsChevronLeft />
            </div>
            <div className="h-8 w-8 flex items-center justify-center pl-0.5 text-zinc-500 bg-zinc-900 rounded-full">
              <BsChevronRight />
            </div>
          </div>
          <div className="flex gap-2 p-[2px] pr-2 bg-zinc-900 text-white items-center rounded-3xl">
            <Image
              src="/images/capa.jpg"
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
            <text className="text-sm">Caio Rodrigues</text>
            <AiOutlineCaretDown />
          </div>
        </header>
        <h1 className="text-white font-semibold text-3xl">Good Afternoon</h1>
        <div className="gap-4 grid grid-cols-3">
          {api.map(
            (playlist, index) =>
              index < 6 && (
                <CardPlaylist
                  name={playlist.name}
                  key={playlist.id}
                  className="col-span-1"
                  play={playlist.play}
                />
              )
          )}
        </div>
        <div className="flex justify-between w-full items-end pt-6">
          <h1 className="text-white font-semibold text-3xl">
            Your Favorite artists
          </h1>
          <text className="text-zinc-500 hover:text-zinc-400 hover:underline cursor-pointer text-sm">
            SHOW ALL
          </text>
        </div>
        <div className="grid gap-4 grid-cols-12 items-center justify-between">
          {apiArtist.map((artist) => (
            <CardArtist
              key={artist.id}
              name={"MC Marks"}
              description={"Artist"}
              srcImg={"/images/capa.jpg"}
              play={false}
              className="grow max-w-[175px] col-span-2"
            />
          ))}
        </div>
      </section>
      <PlayerBar />
    </main>
  );
}
