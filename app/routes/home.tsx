import type { Route } from "./+types/home";
import { Link } from "react-router"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

export default function Home() {

  // TODO: Refactor this gradient to clean it up
  return (
    <div className="parallax">
      <div className="layer layer-1000">
        <div style={{height: "800px", overflow: "visible", display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
          <div style={{height: "2400px", width: "200vw", background: "radial-gradient(90% 80% at 0% 0%, #00E8FFFF 0%, #073AFF00 100%),radial-gradient(40% 60% at 100% 0%, #25BF64FF 0%, #073AFF00 100%),radial-gradient(50% 50% at 60% 30%, #91CE91C4 0%, #073AFF00 100%),radial-gradient(50% 50% at 100% 30%, #00FFE4C2 0%, #00FF8B00 100%),radial-gradient(40% 40% at 10% 30%, #00FF8BB0 0%, #21DD7000 100%)", padding: "100px", flexShrink: 0}}></div>
        </div>
      </div>
      <div className="layer layer-foreground">
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
            <div style={{height: "1600px", backgroundColor: "grey"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
