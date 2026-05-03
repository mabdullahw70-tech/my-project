export default function Button({ children, outline }) {
  return (
    <button
      className={`px-6 py-2 rounded-full transition ${
        outline
          ? "border-2 border-orange-500 text-white hover:bg-orange-500 hover:text-white mb-4"
          : "bg-orange-500 text-white hover:bg-[#1a202c] mb-4"
      }`}
    >
      {children}
    </button>
  );
}