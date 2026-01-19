import { useState } from "react";

const ordersData = [
  { id: 101, customer: "Aarthi", product: "Bracelet", amount: 499, status: "Paid" },
  { id: 102, customer: "Karthik", product: "Chain", amount: 799, status: "Pending" },
  { id: 103, customer: "Meena", product: "Silk Bangles", amount: 1299, status: "Paid" },
  { id: 104, customer: "Rahul", product: "Couple Bands", amount: 999, status: "Cancelled" },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = ordersData.filter((order) => {
    const matchSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "All" || order.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">📦 Orders</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by customer or product..."
        className="w-full mb-4 px-4 py-3 rounded-xl bg-white/10 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {["All", "Paid", "Pending", "Cancelled"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              filter === s
                ? "bg-pink-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/10">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Product</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o) => (
              <tr key={o.id} className="border-t border-white/10">
                <td className="p-4">{o.id}</td>
                <td className="p-4">{o.customer}</td>
                <td className="p-4">{o.product}</td>
                <td className="p-4">₹{o.amount}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      o.status === "Paid"
                        ? "bg-green-500/30 text-green-300"
                        : o.status === "Pending"
                        ? "bg-yellow-500/30 text-yellow-300"
                        : "bg-red-500/30 text-red-300"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 opacity-60">
                  No orders found 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
