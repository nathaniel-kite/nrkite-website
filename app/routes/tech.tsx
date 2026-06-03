import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tech Page | Nrkite" },
    { name: "description", content: "Tech page for the Nrkite website." },
  ];
}

export default function Tech() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14">
      <h1 className="text-3xl font-bold mb-4">Tech Page</h1>
      <p className="text-muted-foreground">
        This is the Tech page. Add your content here.
      </p>
    </div>
  );
}
