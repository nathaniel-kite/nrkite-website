import type { Route } from "./+types/home";
import { Keyboard } from "~/components/interactive-keyboard/keyboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Language | Nate Kite" },
    { name: "description", content: "My conlangs, linguistic projects, and recommended resources." },
  ];
}

export default function Language() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14 max-w-3xl">
      <h2 className="font-heading text-3xl font-bold mb-4">Conlanging Keyboard</h2>
      <div className="text-secondary-foreground space-y-4 mb-4">
        <p>
          This is the keyboard I use for conlanging. It includes almost all of the IPA, an extensive set of diacritics, and a few
          additional special characters.
        </p>
        <Keyboard/>
        <p className="italic">
          Download coming soon!
        </p>
      </div>
    </div>
  );
}
