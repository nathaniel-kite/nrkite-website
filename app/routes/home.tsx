import type { Route } from "./+types/home";
import { Link } from "react-router"
import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeIcon, X } from "@phosphor-icons/react"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog"
import { cn } from "../lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Nrkite" },
    { name: "description", content: "Welcome to the Nrkite website." },
  ];
}

const gradients = [
  { background: "radial-gradient(100% 80% at 100% 0%, rgb(33, 235, 134) 10%, #FFFFFF00 80%)",
    classes: "h-[1800px] w-[120vw] layer-600 top-0 right-0 mr-[-30vw] mt-[-40vh]"
  },
  { background: "radial-gradient(100% 100% at 0% 0%, rgb(32, 253, 235) 10%, #FFFFFF00 55%)",
    classes: "h-[2400px] w-[150vw] layer-800 top-0 left-0 ml-[-20vw] mt-[-40vh]"
  },
  { background: "radial-gradient(100% 100% at 50% 0%, rgba(6, 143, 255, 0.93) 0%, #FFFFFF00 75%)",
    classes: "h-[2400px] w-[200vw] layer-1600 top-0 mt-[-40vh]"
  }
]

export default function Home() {
  const [emailOpen, setEmailOpen] = useState(false);

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
        <div className="text-center">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold whitespace-pre-line">Nathaniel Kite</h1>
          <h2 className="font-heading text-2xl my-4 italic">alias Nate, Geckoarcher, <span className="not-italic">齊楠哲</span></h2>
        </div>
      </div>
      <div className="layer layer-foreground">
        <div className="container mx-auto py-12 px-4 max-w-xl">
          <h1 className="text-3xl font-heading font-bold mb-4">Welcome!</h1>
          <div className="space-y-6 text-secondary-foreground">
            <p>
              Hello and welcome! I'm Nate; I'm a software engineer, musician, and amateur linguist based in Atlanta. This website is where I show off my work, host content,
              and post essays about the things that interest me.
            </p>
            <p>
              <span className="font-bold text-foreground">As a software engineer,</span> I have experience in fullstack development, system architecture, data science, and extended reality applications.
              I've developed cutting-edge computer vision applications, won competitive hackathons, and published research in ACM CSCW. I currently work at Cisco, where
              I build CI/CD and Kubernetes infrastructure and develop AI applications.
            </p>
            <p className="italic">If you're interested in working with me professionally, see the <Link key="/tech" to="/tech" className="underline text-primary">tech</Link> page for my CV.</p>
            <p>
              <span className="font-bold text-foreground">As a musician,</span> I've been performing for 14 years on clarinet and saxophone. I'm classically trained (including a minor in music
              from the University of Georgia), and I have experience in jazz, klezmer, and Eastern European folk music. 
            </p>
            <p>
              <span className="font-bold text-foreground">As a linguist,</span> I speak English and Spanish (B2) and am learning Mandarin (A2). I have some formal education, but most of my
              experience comes from conlanging, which I do to support my homebrew TTRPG setting, Tengril. I specialize in phonology and writing systems.
            </p>
            <p>
              I'm curious and passionate about what I do. If you're interested in any of these fields, don't hesistate to reach out!
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <button onClick={() => setEmailOpen(true)} className="text-secondary-foreground hover:text-foreground transition-colors cursor-pointer">
              <EnvelopeIcon size={24} />
            </button>
            <a href="https://github.com/nathaniel-kite" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-foreground transition-colors">
              <GithubLogoIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nate-kite" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:text-foreground transition-colors">
              <LinkedinLogoIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      <AlertDialog open={emailOpen} onOpenChange={setEmailOpen}>
        <AlertDialogContent>
          <AlertDialogCancel className="absolute top-3 right-3 p-1 h-auto w-auto border-0 hover:bg-muted">
            <X size={16} />
          </AlertDialogCancel>
          <AlertDialogHeader>
            <AlertDialogTitle>Email</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="machinicide">
                n<span>athankite</span><span>.machinicide</span>@gmail.com
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
