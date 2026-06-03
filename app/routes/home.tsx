import type { Route } from "./+types/home";
import { Link } from "react-router"
import { cn } from "../lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

const gradients = [
  { background: "radial-gradient(100% 100% at 0% 0%, rgb(32, 253, 235) 10%, #FFFFFF00 55%)",
    classes: "h-[2400px] w-[150vw] layer-800 top-0 left-0 ml-[-20vw]"
  },
  { background: "radial-gradient(100% 100% at 50% 0%, rgba(6, 143, 255, 0.93) 0%, #FFFFFF00 75%)",
    classes: "h-[2400px] w-[200vw] layer-1600 top-0 center-0"
  },
  { background: "radial-gradient(100% 80% at 100% 0%, rgb(33, 235, 134) 10%, #FFFFFF00 80%)",
    classes: "h-[1800px] w-[120vw] layer-600 top-0 right-0 mr-[-40vw]"
  }
]

export default function Home() {

  return (
    <div className="parallax">
      <div className="layer overflow-visible flex items-center justify-center">
        {gradients.map((gradient) => {
            return(
              <div className={cn(`absolute overflow-visible ${gradient.classes}`)} style={{background: gradient.background}}></div>
            )
          })
        }
      </div>
      <div className="h-[800px]">
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
