import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music Page | Nrkite" },
    { name: "description", content: "Music page for the Nrkite website." },
  ];
}

export default function Music() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14">
      <h1 className="text-3xl font-bold mb-4">Music Page</h1>
      <p className="text-muted-foreground">
        This is the Music page. Add your content here.
      </p>
    </div>
  );
}
