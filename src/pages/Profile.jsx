export default function Profile() {
  return (
    <div className="max-w-3xl space-y-6">
      {/* Heading */}
      <div>
        <p className="text-orange-500 uppercase tracking-[3px] text-[11px] sm:text-xs mb-2">
          User Profile
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          My Profile
        </h1>

        <p className="text-gray-400 mt-2 text-sm sm:text-base leading-6">
          Manage your personal information and account details.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 lg:p-8 shadow-xl">
        {/* Profile Image */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-6 border-b border-white/10">
          <div className="w-20 h-20 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-500 text-3xl shrink-0">
            <i className="fa-solid fa-user"></i>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Shoaib Nawaz
            </h2>

            <p className="text-gray-400 text-sm mt-1">Premium Dashboard User</p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-12 sm:h-13 rounded-2xl bg-white/[0.05] border border-white/10 px-4 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12 sm:h-13 rounded-2xl bg-white/[0.05] border border-white/10 px-4 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-12 sm:h-13 rounded-2xl bg-white/[0.05] border border-white/10 px-4 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none focus:border-orange-500/40 focus:bg-white/[0.07] transition-all duration-300"
            />
          </div>

          {/* Button */}
          <div className="pt-2">
            <button className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white text-sm sm:text-base font-semibold shadow-lg shadow-orange-500/20">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
