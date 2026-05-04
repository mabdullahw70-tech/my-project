export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-300 flex items-center justify-center z-50">
      <div className="w-24 h-24 animate-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer Black Arc */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="3"
            fill="none"
            strokeDasharray="180 100"
            strokeLinecap="round"
          />

          {/* Inner Orange Arc */}
          <circle
            cx="50"
            cy="50"
            r="25"
            stroke="#f97316" // Tailwind orange-500
            strokeWidth="3"
            fill="none"
            strokeDasharray="120 80"
            strokeLinecap="round"
          />

          {/* Inner Light Arc */}
          <circle
            cx="50"
            cy="50"
            r="15"
            stroke="#555"
            strokeWidth="2"
            fill="none"
            strokeDasharray="60 60"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
