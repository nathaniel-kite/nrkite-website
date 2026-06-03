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
      <div className="layer layer-1">
        <div style={{height: "800px", overflow: "visible", display: "flex", alignItems: "flex-start", justifyContent: "center"}}>
          <div style={{height: "2400px", width: "200vw", background: "linear-gradient(180deg, hsla(206, 93%, 57%, 1) 4%, hsla(196, 100%, 71%, 1) 39%, hsla(221, 68%, 52%, 1) 64%, hsla(224, 71%, 4%, 1) 87%)", padding: "100px", flexShrink: 0}}></div>
        </div>
      </div>
      <div className="layer layer-0">
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
