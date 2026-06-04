import type { Route } from "./+types/home";
import { Link } from "react-router"
import { cn } from "../lib/utils";
import { Card } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

const gradients = [,
  { background: "radial-gradient(100% 80% at 100% 0%, rgb(33, 235, 134) 10%, #FFFFFF00 80%)",
    classes: "h-[1800px] w-[120vw] layer-600 top-0 right-0 mr-[-30vw] mt-[-40vh]"
  },
  { background: "radial-gradient(100% 100% at 0% 0%, rgb(32, 253, 235) 10%, #FFFFFF00 55%)",
    classes: "h-[2400px] w-[150vw] layer-800 top-0 left-0 ml-[-20vw] mt-[-40vh]"
  },
  { background: "radial-gradient(100% 100% at 50% 0%, rgba(6, 143, 255, 0.93) 0%, #FFFFFF00 75%)",
    classes: "h-[2400px] w-[200vw] layer-1600 top-0 center-0 mt-[-40vh]"
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
      <div className="h-[700px] flex items-center justify-center layer-600">
        <div className="mt-[-200px] ml-[-25vw]">
          <h1 className="font-heading text-9xl font-bold whitespace-pre-line">Nathaniel Kite</h1>
          <h2 className="font-heading text-2xl my-4 italic pl-3">alias Nate, Geckoarcher, <span className="not-italic">齊楠哲</span></h2>
        </div>
      </div>
      <div className="layer layer-foreground">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-heading font-bold mb-4">Welcome!</h1>
          <div className="space-y-6 text-secondary-foreground">
            <p>
              Hello, and welcome to my website!
            </p>
            <p>
              I'm Nate; I'm a software engineer, musician, and conlanger based in Atlanta. This website is a way for me to show off my work, host content, and post essays about the things that interest me.
            </p>
            <p>
              If you're interested in working with me professionally, check out the <Link to="/tech">Tech</Link> page for my projects and CV.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
