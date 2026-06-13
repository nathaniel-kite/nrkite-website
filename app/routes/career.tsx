import type { Route } from "./+types/home";
import { ExpandableCard } from "~/components/expandable-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { FilePdfIcon } from "@phosphor-icons/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Career | Nate Kite" },
    {
      name: "description",
      content:
        "Interactive CV including professional experience, research, and projects.",
    },
  ];
}

// ---- Education ------------------------------------------------------------

const ugaShortDescription = <p className=""><span className="italic">Magna Cum Laude</span> (GPA 3.89), Zell Miler Scholarship, UGA Presidential Scholar</p>;

const education = [
  {
    logo: <img src="/img/ugaLogo.png" alt="University of Georgia" className="size-10 rounded-md object-cover border" />,
    institution: "University of Georgia, Honors College",
    degree: "B.S. Computer Science; Minors in Music and Spanish; Certificate in Applied Data Science",
    year: "2021-2025",
    location: "Athens, GA",
    shortDescription: <div>{ ugaShortDescription }</div>,
    fullDescription: <div>
      {ugaShortDescription}
      <p className="mt-3 italic font-bold">Relevant Coursework:</p>
      <ul className="list-disc pl-4 italic">
        <li>Data Science</li>
        <li>Data Mining</li>
        <li>Artificial Intelligence</li>
        <li>Algorithms</li>
        <li>Data Structures</li>
        <li>Human-Computer Interaction</li>
      </ul>
    </div>,
    defaultExpanded: false,
    showExpand: false
  }
];

// ---- Skills ---------------------------------------------------------------

const skills: Record<string, string[]> = {
  Languages: ["Python", "Java", "HTML", "CSS", "JavaScript", "C", "C#"],
  Frameworks: ["Pandas", "Scikit-learn", "SpringBoot", "REST", "MCP", "React", "Tailwind CSS", "Flask", "Playwright"],
  Tools: ["Kubernetes", "Kafka", "GitHub Actions", "Jenkins", "MongoDB", "OpenSpec", "AWS", "Unity"],
  Other: ["Leadership", "Communication", "Technical Writing"],
};

// ---- Professional Experience ----------------------------------------------

// Logos rendered as coloured initial badges.
function LogoBadge({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className={`flex size-10 items-center justify-center rounded-md text-sm font-bold text-white ${color}`}
    >
      {initials}
    </div>
  );
}

const ciscoShortDescription = <ul className="list-disc pl-4">
    <li>Reduce development delays by weeks by leading a CI/CD modernization effort — including GitHub Actions, Jenkins, release software cleanups, K8s health probes, trunk-based development, and security scans</li>
    <li>Restructure Kubernetes secret management, patching over 100 major security vulnerabilities</li>
    <li>Develop AI in-app support agent to achieve dramatic reduction in support incidents</li>
  </ul>;

const gulfstreamShortDescription = <ul className="list-disc pl-4">
    <li>Developed a computer vision technique to quickly and precisely localize an AR application in real space</li>
    <li>Led a team of four, communicating with stakeholders, drawing roadmaps, and planning deliverables</li>
    <li>Researched advanced SLAM, localization, and computer vision algorithms</li>
    <li>Integrated state-of-the-art point cloud registration techniques using neural networks</li>
  </ul>;

const pivotAgileShortDescription = <ul className="list-disc pl-4">
    <li>Built a Jira extension to calculate and display additional information for use in Agile transformations</li>
  </ul>;

const experience = [
  {
    logo: <img src="/img/ciscoLogo.jpeg" alt="Cisco" className="size-10 rounded-md object-cover border" />,
    company: "Cisco",
    title: "Software Engineer",
    location: "Atlanta, GA",
    period: "2025 — Present",
    shortDescription: <div>{ciscoShortDescription}</div>,
    fullDescription: <div>
      {ciscoShortDescription}
      <Separator className="mt-4"></Separator>
      <p className="italic mt-4">
        When I joined Cisco, our team had inherited an enormous amount of tech debt and a badly misconfigured development environment.
        Under the guidance of my team leads, I began the process of modernizing our infrastructure and speeding up our development cycle.
      </p>
      <p className="italic mt-4">
        After our team was hit by restructuring, I took over that modernization effort. We've now patched over a hundred security vulnerabilites,
        decked out our GitHub with automated workflows and proper branch protections, implemented health probes to reduce downtime, and patched up all
        sorts of holes in our CI/CD pipeline.
      </p>
      <p className="italic mt-4">
        I've also been folded into Cisco's AI initiatives, building an in-app AI support agent to take the strain off our support team and make things
        easier for our users.
      </p>
    </div>,
    defaultExpanded: false,
  },
  {
    logo: <img src="/img/gulfstreamLogo.jpeg" alt="Gulfstream Aerospace" className="size-10 rounded-md object-cover border"/>,
    company: "Gulfstream Aerospace",
    title: "XR Engineer — UGA Capstone Project",
    location: "Athens, GA",
    period: "2024 — 2025",
    shortDescription: <div>{gulfstreamShortDescription}</div>,
    fullDescription: <div>
      {gulfstreamShortDescription}
      <Separator className="mt-4"></Separator>
      <p className="italic mt-4">
        Our team was asked to build a system that could locate an AR application in a known environment, without any physical markers. That's a tough ask,
        and our mentor informed us that it was "basically impossible."
      </p>
       <p className="italic mt-4">
        We did it, though.
      </p>
      <p className="italic mt-4">
        Our solution utilized the iPad Pro's LiDAR sensor. The user scanned the environment, and passed data to a server running on a local network. We ran a conversion algorithm
        on the provided environmental models to transform them into point clouds, which allowed us to use a state-of-the-art point cloud registration technique 
        (<a href="https://arxiv.org/abs/2105.10382" target="_blank" className="underline text-primary">GeDi</a>)
        to align the model to the user's scan. From there, it's trivial to find the user's location.
      </p>
      <p className="italic mt-4">
        Check out our demo!
      </p>
      <div className="width-100 flex align-items-center justify-center mt-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ArgGdN9y9KM?si=JjFvOYvkP0hRR_pL" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>,
    defaultExpanded: false,
  },
  {
    logo: <img src="/img/pivotAgileLogo.jpg" alt="PivotAgile" className="size-10 rounded-md object-cover border" />,
    company: "PivotAgile",
    title: "Software Developer",
    location: "Atlanta, GA",
    period: "Summer 2023",
    shortDescription: <div>{pivotAgileShortDescription}</div>,
    fullDescription: <div>
      {pivotAgileShortDescription}
      <Separator className="mt-4"></Separator>
      <p className="italic mt-4">
        This was a part-time internship which I took up after my original summer plans fell through. I built PivotAgile a Jira extension to track a variety information which Jira doesn't calculate itself.
      </p>
      <p className="italic mt-4">
        The main takeaway was learning how to read documentation and work with a complicated API (both RESTful and Jira's bespoke extension-building tools).
      </p>
    </div>,
    defaultExpanded: false,
  }
];

// ---- Research -------------------------------------------------------------

const researchShortDescription = <div>
    <p>Interviewed 40+ legal professionals to understand how AI is used and conceptualized within the legal field. Analyzed ethical impacts, opportunities for disruption, and limitations of existing institutions.</p>
    <Button size="sm" asChild className="mt-4">
      <a href="https://dl.acm.org/doi/10.1145/3757554" target="_blank" rel="noopener noreferrer">
        View
      </a>
    </Button>
  </div>

const research = [
  {
    title: "Attorneys and AI: How Lawyers Use Artificial Intelligence and Analyze Its Impacts",
    venue: "Proceedings of the ACM on Human-Computer Interaction",
    year: "2025",
    shortDescription: <div>{researchShortDescription}</div>,
    fullDescription: <div>
      {researchShortDescription}
      <Separator className="mt-4"></Separator>
      <p className="italic mt-4">
        My wonderful research advisor, Dr. Ari Schlesinger (<a href="https://arischlesinger.com" className="underline text-primary" target="_blank">website</a>), brought me on to this project to assist with
        literature review, interviewing, and analysis. It ended up being an amazing introduction to the world of academia; being able to comfortably read academic papers is very useful and a skill most people don't have.
      </p>
      <p className="italic mt-4">
        Cisco later sent me to Bergen, Norway to attend CSCW 2025, where our work was presented. I put together a report for them on how the relationship between AI and workers evolves over time, and what that meant for
        our organization.
      </p>
    </div>
  }
];

// ---- Projects -------------------------------------------------------------

const projects = [
  {
    name: "nrkite.com",
    summary:
      "This website! Fast and beautiful SPA built for accessbility, responsiveness, and extensibility. Hosted on AWS S3.",
    tags: ["React", "JavaScript", "Tailwind CSS", "AWS"],
    link: "/",
  },
  {
    name: "GlobaLink",
    summary:
      "Social media site to link young US immigrants with older, established mentors. Built in 36 hours. 2nd place winner at UGAHacks 9.",
    tags: ["React", "Flask", "MongoDB"],
    link: "https://devpost.com/software/globalink",
  },
  {
    name: "PHOIBLE Classifier",
    summary:
      "Used random forest classifiers to classify langauges by genetic relationship, according to phonemic inventory; achieved accuracy of 68% on 30 extremely weak classes.",
    tags: ["Python", "Scikit-learn", "Data Science"],
    link: "https://github.com/nathaniel-kite/inventory-classifier",
  },
  {
    name: "Paradise Found",
    summary:
      "All-in-one travel planning dashboard including using 6 RESTful APIs, including Ticketmaster, AirBnB, and Meteostat. Built in 36 hours. Top 3 State Farm Challenge finalist at UGAHacks 8.",
    tags: ["Flask", "Python", "Bootstrap", "REST"],
    link: "https://devpost.com/software/safetravels-ha26j9",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function Career() {
  return (
      <div className="container mx-auto py-12 px-4 mt-14 max-w-3xl">
        {/* ----------------------------------------------------------------- */}
        {/* Bio                                                               */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <h1 className="text-3xl font-heading font-semibold text-foreground">Nathaniel Kite</h1>
              <h1 className="text-sm text-muted-foreground">Software Engineer</h1>
            </div>
            <Button variant="ghost" size="icon" className="text-muted-foreground/50 dark:text-muted-foreground/20 hover:text-foreground p-5 dark:hover:text-foreground p-5" asChild aria-label="Download resume">
              <a href="/docs/nathaniel-kite-resume.pdf" download>
                <FilePdfIcon weight="regular" className="size-7" />
              </a>
            </Button>
          </div>
          <p className="text-secondary-foreground mb-3">
            I'm a fullstack developer with experience in system architecture, design, and data science.
          </p>
          <p className="italic text-muted-foreground">Click the "expand" buttons for bonus information and thoughts about my work.</p>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Skills                                                            */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-10">
          {/* <h2 className="mb-6 text-2xl font-heading font-semibold text-foreground">
            Skills
          </h2> */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Education                                                         */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-heading font-semibold text-foreground">
            Education
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <ExpandableCard
                key={`${edu.institution}-${edu.year}`}
                logo={edu.logo}
                title={edu.institution}
                subtitle={edu.degree}
                meta={
                  <>
                    {edu.location}
                    <span aria-hidden className="mx-1">
                      ·
                    </span>
                    {edu.year}
                  </>
                }
                shortContent={edu.shortDescription}
                fullContent={edu.fullDescription}
                defaultExpanded={edu.defaultExpanded}
                showExpand={edu.showExpand}
                className="shadow shadow-muted-foreground/10"
              />
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Professional Experience                                           */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-heading font-semibold text-foreground">
            Professional Experience
          </h2>
        <div className="grid grid-cols-1 gap-6">
          {experience.map((job) => (
            <ExpandableCard
              key={`${job.company}-${job.period}`}
              logo={job.logo}
              title={job.company}
              subtitle={job.title}
              meta={
                <>
                  {job.location}
                  <span aria-hidden className="mx-1">
                    ·
                  </span>
                  {job.period}
                </>
              }
              shortContent={job.shortDescription}
              fullContent={job.fullDescription}
              defaultExpanded={job.defaultExpanded}
              className="shadow shadow-muted-foreground/10"
            />
          ))}
        </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Research                                                          */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-heading font-semibold text-foreground">
            Research
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {research.map((paper) => (
              <ExpandableCard
                key={paper.title}
                title={paper.title}
                subtitle={`${paper.venue} · ${paper.year}`}
                shortContent={paper.shortDescription}
                fullContent={paper.fullDescription}
                defaultExpanded={false}
                titleClass="italic"
                className="shadow shadow-muted-foreground/10"
              />
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------- */}
        {/* Projects                                                          */}
        {/* ----------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-heading font-semibold text-foreground">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name} className="flex flex-col shadow shadow-secondary-foreground/10">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <div>
                      <Button size="sm" asChild>
                        <a
                          href={project.link}
                          target={project.link.startsWith("http") ? "_blank" : undefined}
                          rel={
                            project.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          View
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
  );
}
