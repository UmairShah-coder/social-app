import { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaImage,
  FaVideo,
  FaGlobe,
  FaUserFriends,
  FaLock,
  FaTag,
  FaCaretDown,
} from "react-icons/fa";

import { FiSmile } from "react-icons/fi";
import EmojiPicker from "emoji-picker-react";

export default function CreatePostModal({ onClose }) {
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);

  const [showEmoji, setShowEmoji] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  const privacyRef = useRef(null);

  const privacyOptions = [
    { value: "public", icon: <FaGlobe />, label: "Public" },
    { value: "friends", icon: <FaUserFriends />, label: "Friends" },
    { value: "onlyme", icon: <FaLock />, label: "Only Me" },
  ];

  const current = privacyOptions.find((p) => p.value === privacy);

  // OUTSIDE CLICK CLOSE PRIVACY
  useEffect(() => {
    const handleClick = (e) => {
      if (privacyRef.current && !privacyRef.current.contains(e.target)) {
        setShowPrivacy(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // POST HANDLER
  const handlePost = async () => {
    if (!text && !media) return;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("privacy", privacy);
    if (media) formData.append("media", media);

    try {
      const res = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      console.log("Post created:", data);

      setText("");
      setMedia(null);
      setShowEmoji(false);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* MODAL CARD */}
      <div className="w-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h2 className="font-semibold text-gray-800">Create Post</h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3 px-5 py-4">

          <img
            src="/profile.png"
            className="w-11 h-11 rounded-full object-cover"
          />

          <div className="relative" ref={privacyRef}>

            <p className="font-semibold text-sm">Syed Umair</p>

            {/* PRIVACY BUTTON */}
            <button
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="mt-1 flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200"
            >
              {current?.icon}
              {current?.label}
              <FaCaretDown
                className={`transition ${showPrivacy ? "rotate-180" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            {showPrivacy && (
              <div className="absolute top-14 left-0 bg-white border rounded-xl shadow-lg w-36 z-50">

                {privacyOptions.map((opt) => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      setPrivacy(opt.value);
                      setShowPrivacy(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {opt.icon}
                    {opt.label}
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>

        {/* TEXT */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind, Syed?"
          className="w-full px-5 py-3 outline-none resize-none text-lg"
          rows={4}
        />

        {/* EMOJI */}
        <div className="px-5 relative">

          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="text-xl text-center hover:scale-110 transition"
          > 
            <FiSmile />
          </button>

          {/* FIXED EMOJI POPUP */}
          {showEmoji && (
            <div className="absolute bottom-full mb-2 left-0 z-50 shadow-lg rounded-xl overflow-hidden scale-90 origin-bottom-left">

              <EmojiPicker
                onEmojiClick={(emojiData) =>
                  setText((prev) => prev + emojiData.emoji)
                }
                searchDisabled
                skinTonesDisabled
                height={300}
                width={280}
              />

            </div>
          )}

        </div>

        {/* MEDIA */}
        <div className="flex justify-between px-5 py-4 border-t">

          <label className="group relative cursor-pointer">
            <FaImage className="text-green-500 text-xl" />
            <span className="tooltip">Photo</span>
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />
          </label>

          <label className="group relative cursor-pointer">
            <FaVideo className="text-red-500 text-xl" />
            <span className="tooltip">Video</span>
            <input
              type="file"
              hidden
              accept="video/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />
          </label>

          <div className="group relative cursor-pointer">
            <FaTag className="text-blue-500 text-xl" />
            <span className="tooltip">Tag People</span>
          </div>

        </div>

        {/* POST BUTTON */}
        <div className="p-4">
          <button
            onClick={handlePost}
            disabled={!text && !media}
            className={`w-full py-2 rounded-xl font-medium transition ${
              !text && !media
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Post
          </button>
        </div>

      </div>

      {/* TOOLTIP */}
      <style>{`
        .tooltip {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          background: black;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          opacity: 0;
          transition: 0.2s;
          white-space: nowrap;
        }

        .group:hover .tooltip {
          opacity: 1;
        }
      `}</style>

    </div>
  );
}