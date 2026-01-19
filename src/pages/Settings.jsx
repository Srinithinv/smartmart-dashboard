import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  const [name, setName] = useState("Srinithi");
  const [role, setRole] = useState("Store Manager");

  const toggleClass = (active) =>
    `w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
      active ? "bg-pink-500 justify-end" : "bg-gray-400 justify-start"
    }`;

  const handleSave = () => {
    alert("Settings saved successfully 💖");
  };

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">⚙️ Settings</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">

        {/* Appearance */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur shadow-lg">
          <h3 className="font-semibold mb-4">Appearance</h3>
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <div
              className={toggleClass(darkMode)}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="bg-white w-4 h-4 rounded-full" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur shadow-lg">
          <h3 className="font-semibold mb-4">Notifications</h3>

          <div className="flex justify-between items-center mb-3">
            <span>Order Alerts</span>
            <div
              className={toggleClass(orderAlerts)}
              onClick={() => setOrderAlerts(!orderAlerts)}
            >
              <div className="bg-white w-4 h-4 rounded-full" />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span>Email Updates</span>
            <div
              className={toggleClass(emailUpdates)}
              onClick={() => setEmailUpdates(!emailUpdates)}
            >
              <div className="bg-white w-4 h-4 rounded-full" />
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur shadow-lg md:col-span-2">
          <h3 className="font-semibold mb-4">Profile</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/20 rounded-lg px-4 py-2 outline-none"
              placeholder="Name"
            />
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-white/20 rounded-lg px-4 py-2 outline-none"
              placeholder="Role"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
