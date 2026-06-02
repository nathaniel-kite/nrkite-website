import { Link, useLocation } from "react-router";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tech", label: "Tech" },
  { href: "/language", label: "Language" },
  { href: "/music", label: "Music" },
  { href: "/writing", label: "Writing" }
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center gap-6 h-14">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.href;

        return (
          <Link
            key={link.href}
            to={link.href}
            className={cn(
              "text-gray-200 text-sm font-heading font-medium transition-colors hover:text-white/80",
              isActive && "font-bold text-white"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
