import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass =
    "block px-4 py-3 rounded-xl hover:bg-pink-500/20 transition";

  const activeClass =
    "block px-4 py-3 rounded-xl bg-pink-500/30 shadow";

  return (
    <aside className="w-64 min-h-screen bg-black/40 backdrop-blur-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-10 text-pink-400">SmartMart Pro</h2>

      <nav className="space-y-3">
        <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : linkClass)}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/orders" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
          🛒 Orders
        </NavLink>

        <NavLink to="/customers" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
          👥 Customers
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => (isActive ? activeClass : linkClass)}>
          ⚙ Settings
        </NavLink>
      </nav>
    </aside>
  );
}
