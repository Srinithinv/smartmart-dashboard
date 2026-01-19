import { motion } from "framer-motion";
import SalesChart from "../components/SalesChart";

const stats = [
  { title: "Total Revenue", value: "₹1,24,500", glow: "shadow-pink-500/40" },
  { title: "Total Orders", value: "1,248", glow: "shadow-purple-500/40" },
  { title: "Customers", value: "342", glow: "shadow-indigo-500/40" },
  { title: "Pending Orders", value: "18", glow: "shadow-rose-500/40" },
];

export default function Dashboard() {
  return (
    <motion.div
      className="p-8 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-8 tracking-wide">
        📊 Dashboard Overview
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-xl ${s.glow}`}
          >
            <p className="text-sm opacity-80">{s.title}</p>
            <h2 className="text-3xl font-bold mt-2">{s.value}</h2>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl">
        <SalesChart />
      </div>
    </motion.div>
  );
}
