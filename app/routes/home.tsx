import type { Route } from "./+types/home";
import { HomePage } from "../home/homepage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

export default function Home() {
  return <HomePage />;
}
