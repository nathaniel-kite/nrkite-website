import { Kbd } from "~/components/ui/kbd";
import { Button } from "~/components/ui/button";
import { DownloadSimpleIcon } from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
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
      <div className="text-secondary-foreground space-y-4 mb-4">
        <h2 className="font-heading text-3xl font-bold mb-4">Conlanging Keyboard</h2>
        <p>
          My conlanging keyboard includes almost all of the IPA, an extensive set of diacritics, and a few
          additional special characters. It doesn't require memorizing Unicode, and it works natively on Windows without additional software.
        </p>
        <Keyboard/>
        <h3 className="font-heading text-2xl font-semibold mt-4 text-foreground">Layout</h3>
        <p>
          Most basic IPA characters are accessible by using <Kbd>AltGr</Kbd> or <Kbd>AltGr</Kbd> + <Kbd>Shift</Kbd>.
        </p>
        <p>
          Most diacritics and superscripts can be accessed by using the <Kbd>'</Kbd> key, which activates diacritics mode, or <Kbd>"</Kbd> for doubled diacritics.
          ⟨ø⟩ and ⟨ł⟩ must be precomposed and are accessed with the <Kbd>/</Kbd> key.
        </p>
        <p>
          Tone characters are accessed through <Kbd>AltGr</Kbd> + <Kbd>Shift</Kbd> and the 1–5 keys.
        </p>
        <p>
          For rarer characters, or characters which just couldn't fit onto the main menu, I've added extension keys. These are dead keys accessed through <Kbd>AltGr</Kbd> + the 2–9 keys.
          See the chart for more information.
        </p>
        <h3 className="font-heading text-2xl font-semibold mt-4 text-foreground">Memorization</h3>
        <p>
          Every key is placed for a reason! In general, diacritics are mapped to characters that look like the diacritic (eg. <Kbd>'</Kbd>, <Kbd>s</Kbd> for cedilla). Other diacritics are
          associated based on phonetic association (eg. <Kbd>'</Kbd>, <Kbd>t</Kbd> for the dental diacritic ⟨t̪⟩).
        </p>
        <h3 className="font-heading text-2xl font-semibold mt-4 text-foreground">Download and Installation</h3>
        <p>
          Just download the file below, then unzip the archive and run setup.exe.
        </p>
        <p>
          The keyboard installs as a Quechua keyboard; Microsoft requires you to set a language and I didn't want it to conflict with English keyboards.
        </p>
        <a href="/downloads/cnlg20.zip" download>
          <Button variant="default" className="mt-2">
            <DownloadSimpleIcon weight="bold" className="size-5" />
            Download Conlanging Keyboard v1.20
          </Button>
        </a>
      </div>
    </div>
  );
}
