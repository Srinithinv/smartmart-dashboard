import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    localStorage.setItem("isAuth", true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="bg-white/10 backdrop-blur p-8 rounded-2xl w-[320px] text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">SmartMart Login</h2>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-white/20 outline-none"
        />

        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-white/20 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 py-2 rounded hover:bg-pink-600 transition"
        >
          Login
        </button>

        <p className="text-xs mt-4 text-center opacity-70">
          Any email & password accepted (Demo)
        </p>
      </div>
    </div>
  );
}
