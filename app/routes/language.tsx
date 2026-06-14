import type { Route } from "./+types/home";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { BulldozerIcon } from "@phosphor-icons/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Language | Nate Kite" },
    { name: "description", content: "My conlangs, linguistic projects, and recommended resources." },
  ];
}

export default function Language() {
  return (
    <div className="container mx-auto py-12 px-4 mt-14 max-w-3xl">
      <Card className="shadow shadow-muted-foreground/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BulldozerIcon weight="bold" className="size-6" />
            <span className="font-bold">Under Construction</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary-foreground mb-3">
            In the future, this is where I plan to host my linguistic projects, conlangs, and other resources. Please check back soon!
          </p>
          <p className="text-muted-foreground italic">Last updated: 6/14/2026</p>
        </CardContent>
      </Card>
    </div>
  );
}
