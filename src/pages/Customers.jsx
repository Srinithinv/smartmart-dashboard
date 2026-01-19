import { useState } from "react";

const data = [
  { name: "Aarthi", orders: 5, spent: 2499, status: "Active" },
  { name: "Karthik", orders: 2, spent: 1599, status: "Active" },
  { name: "Meena", orders: 7, spent: 4899, status: "VIP" },
  { name: "Rahul", orders: 1, spent: 999, status: "Inactive" },
];

export default function Customers() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selected, setSelected] = useState(null);

  let list = data.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  sortBy === "name"
    ? list.sort((a, b) => a.name.localeCompare(b.name))
    : list.sort((a, b) => b.orders - a.orders);

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">👥 Customers</h1>

      <div className="flex gap-4 mb-6">
        <input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/20 px-4 py-2 rounded"
        />

        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded text-black"
        >
          <option value="name">Sort by Name</option>
          <option value="orders">Sort by Orders</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((c, i) => (
          <div
            key={i}
            onClick={() => setSelected(c)}
            className="bg-white/10 p-6 rounded-xl cursor-pointer hover:scale-105 transition"
          >
            <h3 className="font-bold">{c.name}</h3>
            <p>Orders: {c.orders}</p>
            <p>Spent: ₹{c.spent}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[300px] animate-scale">
            <h3 className="font-bold text-lg mb-2">{selected.name}</h3>
            <p>Total Orders: {selected.orders}</p>
            <p>Total Spent: ₹{selected.spent}</p>
            <p>Status: {selected.status}</p>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
