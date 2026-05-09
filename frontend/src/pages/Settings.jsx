import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-5 w-full max-w-full overflow-hidden">
      {/* Heading */}
      <div>
        <p className="text-orange-500 uppercase tracking-[2px] text-[10px] sm:text-xs mb-1">
          Dashboard Settings
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2 text-xs sm:text-sm lg:text-base leading-6 max-w-xl">
          Manage your dashboard preferences and account settings.
        </p>
      </div>

      {/* Settings Card */}
      <div className="w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-3 sm:p-5 lg:p-7 shadow-xl space-y-4 overflow-hidden">
        {/* Dark Mode */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          {/* Left */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500 text-sm sm:text-lg shrink-0">
              <i className="fa-solid fa-moon"></i>
            </div>

            <div className="min-w-0">
              <h2 className="text-xs sm:text-lg font-semibold text-white truncate">
                Dark Mode
              </h2>

              <p className="text-gray-400 text-[10px] sm:text-sm leading-4 sm:leading-5">
                Enable dark appearance
              </p>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-11 sm:w-16 h-6 sm:h-9 flex items-center rounded-full p-1 transition-all duration-300 shrink-0 ${
              darkMode ? "bg-orange-500" : "bg-gray-600"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-7 sm:h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
                darkMode ? "translate-x-5 sm:translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          {/* Left */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500 text-sm sm:text-lg shrink-0">
              <i className="fa-solid fa-bell"></i>
            </div>

            <div className="min-w-0">
              <h2 className="text-xs sm:text-lg font-semibold text-white truncate">
                Notifications
              </h2>

              <p className="text-gray-400 text-[10px] sm:text-sm leading-4 sm:leading-5">
                Receive latest updates
              </p>
            </div>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-11 sm:w-16 h-6 sm:h-9 flex items-center rounded-full p-1 transition-all duration-300 shrink-0 ${
              notifications ? "bg-orange-500" : "bg-gray-600"
            }`}
          >
            <div
              className={`w-4 h-4 sm:w-7 sm:h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
                notifications
                  ? "translate-x-5 sm:translate-x-7"
                  : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Save Button */}
        <div className="pt-1">
          <button className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-xs sm:text-base font-semibold shadow-lg shadow-orange-500/20">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
