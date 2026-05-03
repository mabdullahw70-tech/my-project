const news = [1, 2, 3];

export default function News() {
  return (
    <div className="py-16 text-center">
      <h2 className="text-3xl font-bold">
        Our <span className="text-primary">News</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-8 mt-10">
        {news.map((n) => (
          <div key={n} className="shadow rounded-lg overflow-hidden">
            <img src="/news.jpg" />
            <div className="p-4 text-left">
              <h3 className="font-semibold">Fruit article</h3>
              <p className="text-sm text-gray-500">Admin | Date</p>
              <p className="text-sm mt-2">
                Fresh fruits are essential...
              </p>
              <a className="text-primary text-sm">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}