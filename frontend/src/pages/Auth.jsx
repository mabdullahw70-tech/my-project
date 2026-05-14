import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  // YE LINE ADD KARO
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

const clearError = (field) => {
  setErrors((prev) => ({
    ...prev,
    [field]: "",
  }));
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Username Validation
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    // Email Validation
    if (!isLogin) {
      if (!email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Enter a valid email";
      }
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (!isLogin && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Stop if errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      if (isLogin) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/accounts/login/",
          {
            username,
            password,
          },
        );

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        navigate("/dashboard");
      } else {
        await axios.post("http://127.0.0.1:8000/api/accounts/register/", {
          username,
          email,
          password,
        });

        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);

      if (error.response?.data?.detail) {
        setErrors({
          general: error.response.data.detail,
        });
      } else if (error.response?.data?.username) {
        setErrors({
          username: error.response.data.username[0],
        });
      } else if (error.response?.data?.email) {
        setErrors({
          email: error.response.data.email[0],
        });
      } else {
        setErrors({
          general: "Something went wrong",
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16 lg:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl top-[-100px] left-[-100px] animate-blob"></div>

        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-blob animation-delay-2000"></div>

        <div className="absolute w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl top-[40%] left-[40%] animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 rounded-[30px] lg:rounded-[40px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl animate-authCard">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-orange-500 to-orange-600 p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[6px] text-sm text-white/70 mb-4">
              Premium Ecommerce
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Welcome To Fruitkha
            </h2>

            <p className="text-lg text-white/90 leading-8">
              Experience premium organic fruits with modern ecommerce shopping
              and lightning fast delivery.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <i className="fa-solid fa-truck-fast text-xl"></i>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Fast Delivery</h3>
                  <p className="text-white/70 text-sm">
                    Delivered within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <i className="fa-solid fa-shield-heart text-xl"></i>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Secure Shopping</h3>
                  <p className="text-white/70 text-sm">
                    Safe & trusted payments
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Dots */}
            <div className="mt-10 flex gap-4">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <div className="w-4 h-4 rounded-full bg-white/50"></div>
              <div className="w-4 h-4 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-14 animate-formFade">
          {/* Logo Mobile */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500">
              Fruitkha
            </h2>
          </div>

          {/* Toggle */}
          <div className="flex bg-white/10 rounded-full p-1 mb-8 sm:mb-10">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 rounded-full text-sm sm:text-base font-semibold transition duration-300 ${
                isLogin ? "bg-orange-500 text-white shadow-lg" : "text-gray-300"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 rounded-full text-sm sm:text-base font-semibold transition duration-300 ${
                !isLogin
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-300"
              }`}
            >
              Signup
            </button>
          </div>

          {/* Heading */}
          <div className="mb-8 sm:mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {isLogin ? "Welcome Back 👋" : "Create Account"}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-7">
              {isLogin
                ? "Login to continue your shopping experience"
                : "Signup and start your premium shopping journey"}
            </p>
          </div>

          {/* Form */}
          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-4 rounded-2xl mb-4">
              {errors.general}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Full Name */}
            {!isLogin && (
              <div className="relative animate-inputFade">
                <i className="fa-regular fa-user absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>

                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);

                   clearError("username");
                  }}
                  className="w-full bg-white/10 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-gray-400 outline-none focus:border-orange-500 focus:bg-white/5 transition duration-300"
                />
                {errors.username && (
                  <p className="text-red-400 text-sm mt-2 ml-2">
                    {errors.username}
                  </p>
                )}
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <i className="fa-regular fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type="text"
                placeholder={isLogin ? "Username" : "Email Address"}
                value={isLogin ? username : email}
                onChange={(e) => {
                  if (isLogin) {
                    setUsername(e.target.value);

                   clearError("username");
                  } else {
                    setEmail(e.target.value);

                   clearError("email");
                  }
                }}
                className="w-full bg-white/10 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-gray-400 outline-none focus:border-orange-500 focus:bg-white/5 transition duration-300"
              />
              {isLogin
                ? errors.username && (
                    <p className="text-red-400 text-sm mt-2 ml-2">
                      {errors.username}
                    </p>
                  )
                : errors.email && (
                    <p className="text-red-400 text-sm mt-2 ml-2">
                      {errors.email}
                    </p>
                  )}
            </div>

            {/* Password */}
            {/* Password */}
            <div className="relative">
              <i className="fa-solid fa-lock absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);

                  clearError("password");
                }}
                className="w-full bg-white/10 border border-white/10 rounded-2xl pl-14 pr-14 py-4 text-sm sm:text-[15px] text-white placeholder:text-gray-400 outline-none focus:border-orange-500 focus:bg-white/5 transition duration-300"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-2 ml-2">
                  {errors.password}
                </p>
              )}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition"
              >
                <i
                  className={`fa-regular ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                  }`}
                ></i>
              </button>
            </div>
            {/* Confirm Password */}
            {!isLogin && (
              <div className="relative animate-inputFade">
                <i className="fa-solid fa-lock absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);

                   clearError("confirmPassword");
                  }}
                  className="w-full bg-white/10 border border-white/10 rounded-2xl pl-14 pr-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-gray-400 outline-none focus:border-orange-500 focus:bg-white/5 transition duration-300"
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-2 ml-2">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {/* Remember & Forgot */}
            {isLogin && (
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between sm:items-center text-gray-300 text-sm pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-orange-500 w-4 h-4"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="hover:text-orange-500 transition"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-sm sm:text-base tracking-wide font-semibold transition duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/20 mt-2"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  <span>
                    {isLogin ? "Logging in..." : "Creating Account..."}
                  </span>
                </div>
              ) : (
                <span>
                  {isLogin ? "Login To Account" : "Create New Account"}
                </span>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-white/10"></div>

              <span className="text-gray-400 text-sm">OR</span>

              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 py-4 rounded-2xl transition duration-300"
              >
                <i className="fa-brands fa-google text-red-400"></i>
                <span className="text-white text-sm">Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 border border-white/10 bg-white/5 hover:bg-white/10 py-4 rounded-2xl transition duration-300"
              >
                <i className="fa-brands fa-facebook-f text-blue-400"></i>
                <span className="text-white text-sm">Facebook</span>
              </button>
            </div>
          </form>

          {/* Bottom Text */}
          <p className="text-center text-gray-300 mt-8 text-sm leading-7">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-orange-500 ml-2 hover:underline font-semibold"
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
