import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Language Page | Nrkite" },
    { name: "description", content: "Language page for the Nrkite website." },
  ];
}

export default function Language() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Language Page</h1>
      <p className="text-muted-foreground">
        This is the Language page. Add your content here.
      </p>
    </div>
  );
}
