import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Other Page | Nrkite" },
    { name: "description", content: "Other page for the Nrkite website." },
  ];
}

export default function Other() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Other Page</h1>
      <p className="text-muted-foreground">
        This is the Other page. Add your content here.
      </p>
    </div>
  );
}
