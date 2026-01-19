import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", sales: 4000 },
  { day: "Tue", sales: 3000 },
  { day: "Wed", sales: 5000 },
  { day: "Thu", sales: 4200 },
  { day: "Fri", sales: 6200 },
  { day: "Sat", sales: 8200 },
  { day: "Sun", sales: 7000 },
];

export default function SalesChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <defs>
            <linearGradient id="pink" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>

          <XAxis dataKey="day" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="url(#pink)"
            strokeWidth={4}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
