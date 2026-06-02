import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";
import { MobileNav } from "../components/mobile-nav";
import { ModeToggle } from "../components/mode-toggle";

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur shadow-md flex items-center px-4">
        <div className="flex-1">
          <MobileNav />
        </div>
        <Navbar />
        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
