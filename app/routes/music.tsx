import type { Route } from "./+types/home";
import MusicPlayer from "~/components/ui/music-player";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music Page | Nrkite" },
    { name: "description", content: "Music page for the Nrkite website." },
  ];
}

const song = {
  name: "Shalom Aleichem",
  artists: ["Traditional", "arr. Giora Feidman & Béla Kovács"],
  src: "/audio/shalomAleichem.wav",
};

export default function Music() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14">
      <h1 className="text-3xl font-bold mb-4">Music Page</h1>
      <MusicPlayer song={song} className="max-w-[800px]" />
    </div>
  );
}
