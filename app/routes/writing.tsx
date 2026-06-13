import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Writing | Nate Kite" },
    { name: "description", content: "Writing page for the Nrkite website." },
  ];
}

export default function Writing() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14">
      <h1 className="text-3xl font-bold mb-4">Writing Page</h1>
      <p className="text-muted-foreground">
        This is the Writing page. Add your content here.
      </p>
    </div>
  );
}
