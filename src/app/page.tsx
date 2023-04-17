import { NavBar } from "@/components/NavBar";
import { PlayerBar } from "@/components/PlayerBar";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-zinc-900/95">
      <NavBar />
      <PlayerBar />
    </main>
  );
}
