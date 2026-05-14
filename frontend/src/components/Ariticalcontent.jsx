export function Ariticalcontent({ image, title, para1, para2, para3 }) {
  return (
    <div>
      <img src={image} className="w-full rounded-md mb-6" />
      <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3">
        <span>👤 Admin</span>
        <span>📅 27 December, 2019</span>
      </div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{para1}</p>
      <p className="text-gray-600 text-sm mb-4">{para2}</p>
      <p className="text-gray-600 text-sm mb-10">{para3}</p>
    </div>
  );
}
