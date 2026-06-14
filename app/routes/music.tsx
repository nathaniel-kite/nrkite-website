import { Card } from "~/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import type { Route } from "./+types/home";
import MusicPlayer from "~/components/ui/music-player";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music | Nate Kite" },
    { name: "description", content: "My thoughts, experiences, and recommendations on music." },
  ];
}

const shalomAleichem = {
  name: "Shalom Aleichem",
  artists: ["Traditional", "arr. Béla Kovács"],
  src: "/audio/shalomAleichem.wav",
};

const poulenc = {
  name: "Clarinet Sonata, mvt. III, Allegro con Fuoco",
  artists: ["Francis Poulenc"],
  src: "/audio/poulencMvmt3.wav",
};

const genres = [
  { value: "westernClassical", title: "Western Classical",
    preface: <div className="italic mb-3">WIP</div>,
    recs: [
      {
        name: <span>The Firebird</span>,
        author: <span>Igor Stravinsky</span>,
        link: "/"
      },
      {
        name: <span>Symphony 10, II. Allegro</span>,
        author: <span>Dimitri Shostakovich</span>,
        link: "/"
      }
    ]
  },
  { value: "northWestEurope", title: "Northern & Western Europe",
    preface: <div></div>,
    recs: [
      {
        name: <span>Ievan Polkka</span>,
        author: <span>Traditional; Loituma</span>,
        link: "https://youtu.be/hqthspSKZV8?si=4fPxrJ_hyfZBD-Z3",
        tradition: "Finnish"
      },
      {
        name: <span>På Dovrefjell</span>,
        author: <span>Traditional; Arve Moen Bergset</span>,
        link: "https://youtu.be/TdSDLzuhviE?si=xbuJOo6kPlYLjMqC",
        tradition: "Norweigian"
      },
      {
        name: <span>Eirik Jarl</span>,
        author: <span>Harold Floss</span>,
        link: "https://youtu.be/WQ3C-1C5XuU?si=Ox_Gky13ZxjLSdbX",
        tradition: "Norweigian"
      },
      {
        name: <span>The Butterfly</span>,
        author: <span>Traditional; Tin Whistler and Ulli</span>,
        link: "https://youtu.be/UzlyHma7LyI?si=YHVVRb6_iygAc-47",
        tradition: "Celtic"
      },
      {
        name: <span>Hiru Pitziak</span>,
        author: <span>Traditional; Alboka</span>,
        link: "https://youtu.be/kKLyIFf4yfo?si=U1kkV3Uj6AdDJYgA",
        tradition: "Basque"
      },
      {
        name: <span>Dama d'Aragó</span>,
        author: <span>Traditional; Barcelona Gipsy Klezmer Orchestra</span>,
        link: "https://youtu.be/RFQD1DUlzxY?si=wbd8Skfk--_GqTHL",
        tradition: "Catalan"
      },
      {
        name: <span>Cu Ti Lu Dissi</span>,
        author: <span>Traditional; Barcelona Gipsy balKan Orchestra</span>,
        link: "https://youtu.be/poYStHY__-I?si=O3E8zO5lu5eAX0jB",
        tradition: "Sicilian"
      },
    ]
  },
  { value: "easternEurope", title: "Eastern Europe",
    preface: <div></div>,
    recs: [
      {
        name: <span>Когда мы были на войне</span>,
        author: <span>Traditional; Хор Сретенского монастыря</span>,
        link: "https://youtu.be/N2VACryn9oE?si=8iepTIyq9PqwYJxI",
        tradition: "Russian"
      },
      {
        name: <span>Stefan</span>,
        author: <span>Hrdza</span>,
        link: "https://youtu.be/ZALtzTmPz-E?si=4tE3NlyLKQUEfblp",
        tradition: "Slovakian"
      },
      {
        name: <span>Hej, Sokoły!</span>,
        author: <span>Unknown; Pikardijska Tercia</span>,
        link: "https://youtu.be/ZzZ1qmXZBuY?si=2b58VNnJDdUdYsh3",
        tradition: "Polish"
      },
      {
        name: <span>Tango Apocalypso</span>,
        author: <span>Boris Kovač</span>,
        link: "https://youtu.be/XhXBm5-pqCM?si=kDeixYX15EL5gKyv",
      },
      {
        name: <span>Od Ebra do Dunava</span>,
        author: <span>Traditional; Barcelona Gipsy balKan Orchestra</span>,
        link: "https://youtu.be/uOtGayTFmF8?si=MYpbpTkH8lk3KZeM",
        tradition: "Serbian (& Spanish)"
      },
      {
        name: <span>Helikopter</span>,
        author: <span>Fazlija</span>,
        link: "https://youtu.be/3ExGuHWdXCE?si=MrBU-Jg4xpCOcRox",
        tradition: "Bosnian"
      },
      {
        name: <span>Sandansko</span>,
        author: <span>Traditional; Besh o droM</span>,
        link: "https://youtu.be/ErfLABLHz1w?si=ZzhIdHMK80Mbk4Oc",
        tradition: "Bosnian (sung in Hungarian)"
      },
      {
        name: <span>Meggyútom a Pipám</span>,
        author: <span>Besh o droM</span>,
        link: "https://youtu.be/jpuLC4bJag8?si=msCZlAPOYCYNqvm_",
        tradition: "Hungarian"
      },
      {
        name: <span>Kaval Sviri</span>,
        author: <span>Traditional; Bulgarian State Radio & Television Female Vocal Choir</span>,
        link: "https://youtu.be/hVqrW-fPOQ0?si=452bLr_uwVzGsAjf",
        tradition: "Bulgarian"
      },
      {
        name: <span>Makedonsko Devojche</span>,
        author: <span>Traditional; Black Sea Hotel</span>,
        link: "https://youtu.be/TSIC1KWf9uo?si=f3zxzt7ru771ap0r",
        tradition: "Bulgarian"
      },
    ]
  },
  { value: "jewish", title: "Jewish",
    preface: <div></div>,
    recs: [
      {
        name: <span>Mazel Tov</span>,
        author: <span>Traditional; Giora Feidman</span>,
        link: "https://youtu.be/CK7GtBUBeBI?si=Ofg4IRhj7Et093dv"
      },
      {
        name: <span>Dancing with the Rabbi</span>,
        author: <span>Traditional; Giora Feidman</span>,
        link: "https://youtu.be/I4kkVcWCajE?si=F-QuNW2Jb-aIRGbb"
      },
      {
        name: <span>Hévenu Shalom Aléchem</span>,
        author: <span>Traditional; Barcelona Gipsy Klezmer Orchestra</span>,
        link: "https://youtu.be/CK1sjrpbpiw?si=p02Sh9DFdO2X7lPO"
      },
      {
        name: <span>Im Hashem Lo Yivneh Bayis</span>,
        author: <span>Shlomo Yehuda Rechnitz; Shira Choir</span>,
        link: "https://youtu.be/ckVYO9oI8vc?si=ZfV2N3M-bwOTGKUo"
      }
    ]
  },
  { value: "caucasus", title: "The Caucusus",
    preface: <div></div>,
    recs: [
      {
        name: <span>Noxchicho</span>,
        author: <span>Pankisi Ensemble</span>,
        link: "https://youtu.be/BFx8RQa-JJc?si=OML7TN2qijmG9ujJ",
        tradition: "Chechen"
      },
      {
        name: <span>Lashgvash</span>,
        author: <span>Rustavi Choir</span>,
        link: "https://youtu.be/w7PW66GTXi0?si=iXpqj5uZ-c02Ard7",
        tradition: "Georgian"
      },
      {
        name: <span>Acharuli Gandagana</span>,
        author: <span>Traditional; Unknown</span>,
        link: "https://youtu.be/5SMWMztS6_k?si=oMZ-WhLu5KDraA7p",
        tradition: "Georgian"
      },
      {
        name: <span>Kakhuri</span>,
        author: <span>Traditional; Trio Mandili</span>,
        link: "https://youtu.be/EDK9KOfknTw?si=xwXA6gLLG4r79VeQ",
        tradition: "Georgian"
      },
      {
        name: <span>Nu Gikors, Qalav</span>,
        author: <span>Traditional; Baisani Ensemble</span>,
        link: "https://youtu.be/1zelzFER40o?si=efAvzW8E1Ne2Wrz-",
        tradition: "Georgian"
      },
      {
        name: <span>Aphkhazuri</span>,
        author: <span>Bani</span>,
        link: "https://youtu.be/xAaT68yc8kY?si=mfgjt4l4dqwg5ieS",
        tradition: "Georgian (possibly Abkhaz?)"
      },
      {
        name: <span>Zim Khorotik Yar</span>,
        author: <span>Traditional; Arev Armenian Folk Ensemble</span>,
        link: "https://youtu.be/KqqenfG5Pq4?si=pfPyk4AZwhUmyLim",
        tradition: "Armenian"
      },
    ]
  },
  { value: "centralAsia", title: "Central Asia",
    preface: <div></div>,
    recs: [
      {
        name: <span>Dombıra</span>,
        author: <span>Arslanbek Sultanbekov</span>,
        link: "https://www.youtube.com/watch?v=-o68Za69bCc",
        tradition: "Nogai"
      },
      {
        name: <span>Adai</span>,
        author: <span>Kurmangazy Sagyrbayuly; Unknown</span>,
        link: "https://youtu.be/QR8bnM-GvDk?si=rWOogVczV5J1vPu8",
        tradition: "Kazakh"
      },
      {
        name: <span>Ezir-Kara</span>,
        author: <span>Traditional; Marmota</span>,
        link: "https://www.youtube.com/watch?v=AAuEAYa19K8",
        tradition: "Tuvan"
      },
      {
        name: <span>Men, Tyva Men</span>,
        author: <span>Republic of Tuva National Anthem</span>,
        link: "https://youtu.be/NNBPpu3GfLA?si=tuolqYqwuz-bR3Id",
        tradition: "Tuvan"
      },
      {
        name: <span>Herdsman</span>,
        author: <span>Anda Union</span>,
        link: "https://www.youtube.com/watch?v=KOS9k4DScqM",
        tradition: "Mongolian"
      },
    ]
  },
  { value: "other", title: "Other",
    preface: <div></div>,
    recs: [
      {
        name: <span>Pūkākī</span>,
        author: <span>Te Matini</span>,
        link: "https://youtu.be/m6ObN3__-TE?si=8diGNekiZhFPoufn",
        tradition: "Maori"
      },
      {
        name: <span>Haka</span>,
        author: <span>Ngati Rangiwewehi</span>,
        link: "https://youtu.be/m6ObN3__-TE?si=8diGNekiZhFPoufn",
        tradition: "Maori"
      },
      {
        name: <span>K'oli Pankarita</span>,
        author: <span>Zulma Yugar</span>,
        link: "https://youtu.be/B3weNEP63Dk?si=zNLnYby5t4qjgaTL",
        tradition: "Aymara"
      },
      {
        name: <span>Legend</span>,
        author: <span>The Bulgarian Voices Angelite & Huun-Huur-Tu</span>,
        link: "https://youtu.be/GcpdD8-czr4?si=IMzeuvohUO9ZOfW6",
        tradition: "Bulgarian & Tuvan"
      },
    ]
  },
];

export default function Music() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14 max-w-3xl">
      <h2 className="font-heading text-3xl font-bold mb-4">Music</h2>
      <div className="text-secondary-foreground space-y-4">
        <p>
          I love music.
        </p>
        <p>
          I started playing when I was nine, and ever since, music has been an essential part of myself. I don't think words alone
          can do it justice, but if you've ever poured your heart and soul into something greater than yourself, then surely you understand.
        </p>
        <p>
          Clarinet is my first instrument, and I picked up saxophone in high school for jazz band and pit ensemble. Around that time, I also started
          expanding my horizons into "world music" — first klezmer, then gradually into Eastern Europe, the Caucusus, and Central Asia. 
        </p>
        <Accordion type="single" collapsible className="border rounded-lg px-4 bg-card shadow shadow-secondary-foreground/10">
          <AccordionItem value="recordings">
            <AccordionTrigger><span className="text-foreground-primary font-semibold text-base">Do you have any recordings?</span></AccordionTrigger>
            <AccordionContent>
              <p className="text-secondary-foreground">
                Of course! Here's my rendition of the traditional Jewish song, <span className="italic">Shalom Aleichem</span> (arr. Béla Kovács):
              </p>
                <MusicPlayer song={shalomAleichem} className="mx-auto px-3 py-2 mb-4 border rounded-lg" />
              <p>
                And this is the finale of Francis Poulenc's clarinet sonata:
              </p>
                <MusicPlayer song={poulenc} className="mx-auto px-3 py-2 mb-4 border rounded-lg" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>
          As I fill out this website, I plan to write essays about my more interesting musical opinions.
          But for now, I wanted to just include the most essential content... recommendations!
        </p>
        <h2 className="font-heading text-2xl font-semibold">Selections</h2>
        <p>
          This is a sample of some of the best and most interesting music I've listened to! I've especially focused on pieces that got me into new
          genres. Hopefully you can find something interesting in here!
        </p>
        <Accordion type="multiple" className="border rounded-lg px-4 bg-card shadow shadow-secondary-foreground/10">
          {genres.map((genre) => (
            <AccordionItem key={genre.value} value={genre.value}>
              <AccordionTrigger><span className="text-foreground-primary font-semibold text-base">{genre.title}</span></AccordionTrigger>
              <AccordionContent>
                {genre.preface}
                <ul className="list-disc pl-4">
                  {genre.recs.map((rec, i) => (
                    <li>
                      <a href={rec.link} target="_blank" className="font-semibold">{rec.name}</a> — {rec.author} {"tradition" in rec && <span className="italic"> — {rec.tradition}</span>}
                    </li>
                ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="italic text-muted-foreground">
          This music does not represent my political beliefs. I do not endorse any groups, movements, or ideologies associated
          with it.
        </p>
      </div>
    </div>
  );
}
