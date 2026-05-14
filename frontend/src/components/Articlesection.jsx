import { Ariticalcontent } from "./Ariticalcontent";
import { Comments } from "./Comments";
import { CommentsForm } from "./CommentsForm";
import { Sidebar } from "./Sidebar";

export default function ArticleSection({ articleData, sidebarData }) {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <Ariticalcontent {...articleData} />
          <Comments />
          <CommentsForm />
        </div>
        <Sidebar {...sidebarData} />
      </div>
    </div>
  );
}
