import type { Route } from "./+types/home";
import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-heading font-bold mb-4">Nate Kite</h1>
      <div className="space-y-6 text-secondary-foreground">
        <p>
          Hello! Welcome to my website!
        </p>
        <p>
          I'm a developer, musician, conlanger, rock climber, and more. This website is a place for me to share projects, resources, and essays for all my different interests.
        </p>
        <p>
          If you're interested in working with me professionally, check out the <Link to="/tech">Tech</Link> page for my projects and CV.
         </p>
      </div>
    </div>
  );
}
