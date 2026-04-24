import { useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import CreatePostModal from "./CreatePostModal";

export default function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="bg-white rounded-2xl border shadow-sm p-4">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
        {/* TOP INPUT */}
        <div className="flex items-center gap-3">

          {/* PROFILE */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/profile.png"
              alt="profile"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* OPEN MODAL INPUT */}
          <button
            onClick={() => setOpen(true)}
            className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-left text-sm text-gray-500 hover:bg-gray-200 transition"
          >
            What's on your mind, Syed?
          </button>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-between mt-3 text-sm text-gray-600">

          <button className="flex items-center gap-2 hover:text-red-500 transition">
            <FaVideo className="text-red-500" />
            Live
          </button>

          <button className="flex items-center gap-2 hover:text-green-500 transition">
            <FaImage className="text-green-500" />
            Photo
          </button>

          <button className="flex items-center gap-2 hover:text-yellow-500 transition">
            <FiSmile className="text-yellow-500" />
            Feeling
          </button>

        </div>

      </div>

      {/* MODAL */}
      {open && (
        <CreatePostModal onClose={() => setOpen(false)} />
      )}
    </>
  );
}