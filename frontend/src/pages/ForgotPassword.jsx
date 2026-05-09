export default function ForgotPassword() {
  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6">
      <div className="w-full max-w-xl bg-white/10 border border-white/10 rounded-[40px] backdrop-blur-2xl p-10">
        <h1 className="text-4xl font-bold text-white mb-5">Forgot Password</h1>

        <p className="text-gray-300 mb-8">
          Enter your email to receive reset link.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none mb-6"
        />

        <button className="w-full bg-orange-500 py-5 rounded-2xl hover:bg-orange-600 transition text-white font-semibold text-lg">
          Send Reset Link
        </button>
      </div>
    </section>
  );
}
