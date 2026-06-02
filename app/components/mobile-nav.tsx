import { Link, useLocation } from "react-router";
import { List } from "@phosphor-icons/react";
import { cn } from "../lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { navLinks } from "./navbar";

export function MobileNav() {
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-200 hover:text-white hover:bg-white/10"
        >
          <List className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gray-900 text-gray-200 border-gray-700">
        <SheetHeader>
          <SheetTitle className="text-white">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <SheetClose key={link.href} asChild>
                <Link
                  to={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-heading font-medium transition-colors hover:bg-white/10 hover:text-white",
                    isActive && "bg-white/10 text-white font-bold"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
