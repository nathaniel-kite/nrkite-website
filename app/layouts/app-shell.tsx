import { Outlet } from "react-router";
import { Navbar } from "../components/navbar";

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
