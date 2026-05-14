export function Sidebar({ recentPosts, archivePosts, tags }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4">Recent Posts</h1>
        <ul className="text-sm text-gray-600 space-y-2">
          {recentPosts.map((item, i) => (
            <li key={i}>&gt; {item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4">Archive Posts</h1>
        <ul className="text-sm text-gray-600 space-y-2">
          {archivePosts.map((item, i) => (
            <li key={i}>&gt; {item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold mb-4">Tags</h1>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, i) => (
            <span key={i} className="border px-3 py-1 rounded-md text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
