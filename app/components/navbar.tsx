import { Link, useLocation } from "react-router";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../components/ui/navigation-menu"
import { cn } from "../lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/other", label: "Tech" },
  { href: "/other", label: "Language" },
  { href: "/other", label: "Music" },
  { href: "/other", label: "Writing" }
];

export function Navbar() {
  const location = useLocation();

  return (
    <div className="container mx-auto">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(isActive ? "font-bold" : "font-normal")}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}


// export function Navbar2() {
//   const location = useLocation();

//   return (
//     <nav className="border-b bg-background">
//       <div className="container mx-auto flex h-14 items-center gap-6 px-4">
//         <Link to="/" className="font-semibold text-lg">
//           Nrkite
//         </Link>
//         {navLinks.map((link) => {
//           const isActive = location.pathname === link.href;
//           return (
//             <Link
//               key={link.href}
//               to={link.href}
//               className={cn(
//                 "text-sm font-medium transition-colors hover:text-foreground/80",
//                 isActive
//                   ? "text-foreground"
//                   : "text-foreground/60"
//               )}
//             >
//               {link.label}
//             </Link>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }
