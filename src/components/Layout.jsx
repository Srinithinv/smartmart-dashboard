import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
   <div className="flex min-h-screen bg-gradient-to-br from-[#0b1026] via-[#1b1f4a] to-[#2b1055] text-white">

      <Sidebar />
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
