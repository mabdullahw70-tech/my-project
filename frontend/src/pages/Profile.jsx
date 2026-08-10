import { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({
    first_name: "Sarfraz",
    email: "sarfraz@example.com",
  });
  const [loading, setLoading] = useState(false); // ✅ Button disable karne ke liye

  const handleUpdate = async () => {
    setLoading(true);
    try {
      console.log("Updating profile...", user);
      await axios.post("http://127.0.0.1:8000/api/update-profile/", user);
      alert("Profile Saved successfully!");
    } catch (err) {
      console.error("Update failed", err);
      alert("Error: Server se connect nahi ho raha. Console check karein!");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="p-8 bg-[#0b1220] rounded-3xl border border-white/10 text-white">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="text-gray-400">Name</label>
          <input
            className="w-full p-3 bg-white/5 rounded-xl border border-white/10 outline-none focus:border-orange-500"
            value={user.first_name}
            onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-gray-400">Email</label>
          <input
            className="w-full p-3 bg-white/5 rounded-xl border border-white/10 outline-none focus:border-orange-500"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button
          onClick={handleUpdate}
          disabled={loading} // ✅ Click hone par disable ho jayega
          className="bg-orange-500 px-6 py-3 rounded-xl font-bold hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
