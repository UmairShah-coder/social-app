import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import PeopleYouMayKnow from "../components/PeopleYouMayKnow";
import Loader from "../components/Loader";
import CreatePost from "../components/CreatePost";
const stories = [
  { id: 1, name: "Ali", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "John", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Hassan", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ayesha", image: "https://i.pravatar.cc/150?img=5" },
  { id: 5, name: "Sara", image: "https://i.pravatar.cc/150?img=6" },
  { id: 6, name: "Noor", image: "https://i.pravatar.cc/150?img=7" },
  { id: 7, name: "Talha", image: "https://i.pravatar.cc/150?img=8" },
  { id: 8, name: "Alex", image: "https://i.pravatar.cc/150?img=9" },
];

const posts = [
  {
    id: 1,
    name: "Ali Khan",
    time: "2h ago",
    text: "Building something amazing 🚀",
    image: "https://picsum.photos/900/500",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    time: "5h ago",
    text: "UI matters more than people think 💡",
    image: "https://picsum.photos/901/500",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <MainLayout>

      <div className="min-h-screen bg-gray-50">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
          * { font-family: 'Poppins', sans-serif; }
        `}</style>

        {/* ================= TOP CONTAINER ================= */}
        <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">

          {/* ================= STORIES ================= */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">

            {/* YOUR STORY */}
            <div className="flex-shrink-0 w-24">

              <div className="relative w-24 h-36 rounded-2xl overflow-hidden border shadow-sm bg-gray-100">

                <img
                  src="/profile.png"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  <FiPlus />
                </div>

              </div>

              <p className="text-xs text-center mt-1 text-gray-600">
                Your Story
              </p>

            </div>

            {/* FRIEND STORIES */}
            {stories.map((s) => (
              <div key={s.id} className="flex-shrink-0 w-24">

                <div className="relative w-24 h-36 rounded-2xl overflow-hidden border shadow-sm">

                  <img
                    src={s.image}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>

                  <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                    {s.name}
                  </div>

                </div>

              </div>
            ))}

          </div>
<CreatePost />
          {/* ================= POSTS ================= */}
          <div className="space-y-6">

            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl border shadow-sm overflow-hidden transition hover:shadow-lg"
              >

                {/* HEADER */}
                <div className="flex items-center justify-between p-4">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 ring-2 ring-gray-100">
                      <img
                        src={`https://i.pravatar.cc/150?img=${post.id + 10}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-sm text-gray-800">
                        {post.name}
                      </p>
                      <p className="text-xs text-gray-400">{post.time}</p>
                    </div>

                  </div>

                  <button className="text-gray-400 hover:text-gray-600 text-xl">
                    ⋯
                  </button>

                </div>

                {/* TEXT */}
                <p className="px-4 pb-3 text-sm text-gray-700 leading-relaxed">
                  {post.text}
                </p>

                {/* IMAGE */}
                <div className="w-full bg-gray-100">
                  <img
                    src={post.image}
                    className="w-full max-h-[520px] object-cover"
                  />
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between px-5 py-3 border-t bg-gray-50">

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                    <FaThumbsUp /> Like
                  </button>

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                    <FaComment /> Comment
                  </button>

                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition">
                    <FaShare /> Share
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <PeopleYouMayKnow />

    </MainLayout>
  );
}