import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur shadow-md">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
