export default function PagePagination() {
  return (
    <div>
      <div className="flex gap-2 justify-center items-center mt-6 mb-28">
        <div className="bg-gray-300 hover:bg-orange-400 text-gray-500 rounded-full font-bold w-16 h-10 flex justify-center items-center transition">Prev</div>
        <div className="bg-gray-300 hover:bg-orange-400 text-gray-500 rounded-full font-bold w-8 h-10 flex justify-center items-center transition">1</div>
        <div className="bg-gray-300 hover:bg-orange-400 text-gray-500 rounded-full font-bold w-8 h-10 flex justify-center items-center transition">2</div>
        <div className="bg-gray-300 hover:bg-orange-400 text-gray-500 rounded-full font-bold w-8 h-10 flex justify-center items-center transition">3</div>
        <div className="bg-gray-300 hover:bg-orange-400 text-gray-500 rounded-full font-bold w-16 h-10 flex justify-center items-center transition">Next</div>
      </div>
    </div>
  );
}
