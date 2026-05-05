import { FaCheck } from "react-icons/fa";
export default function Sectioncheck({ title, children, isOpen, onClick }) {
  return (
    <div className="bg-gray-200 rounded shadow">
      <div
        onClick={onClick}
        className="cursor-pointer px-5 py-4 flex justify-between items-center border-b"
      >
        <h3 className="font-medium flex items-center gap-2">
          <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-orange-500">
            <FaCheck className="text-orange-500 text-sm" />
          </span>
          {title}
        </h3>
        <span className="text-lg">{isOpen ? "-" : "+"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] p-5" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
