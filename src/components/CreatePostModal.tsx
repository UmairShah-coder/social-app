import { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaImage,
  FaVideo,
  FaGlobe,
  FaUserFriends,
  FaLock,
  FaTag,
  FaMapMarkerAlt,
  FaSmile,
  FaCaretDown,
  FaSmileWink,
} from "react-icons/fa";

import EmojiPicker from "emoji-picker-react";

type Props = {
  onClose: () => void;
};

export default function CreatePostModal({ onClose }: Props) {
  const [text, setText] = useState("");
 const [media, setMedia] = useState<File | null>(null);

  const [showEmoji, setShowEmoji] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [privacy, setPrivacy] = useState("public");
const privacyRef = useRef<HTMLDivElement | null>(null);

  const privacyOptions = [
    { value: "public", icon: <FaGlobe />, label: "Public" },
    { value: "friends", icon: <FaUserFriends />, label: "Friends" },
    { value: "onlyme", icon: <FaLock />, label: "Only Me" },
  ];

  const current = privacyOptions.find((p) => p.value === privacy);

  useEffect(() => {
    const handleClick = (e) => {
      if (privacyRef.current && !privacyRef.current.contains(e.target)) {
        setShowPrivacy(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handlePost = async () => {
    if (!text && !media) return;

    const formData = new FormData();
    formData.append("text", text);
    formData.append("privacy", privacy);
    if (media) formData.append("media", media);

    try {
      await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

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
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      <div className="w-[520px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-3 border-b">
          <h2 className="font-semibold text-gray-800">Create Post</h2>

          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <FaTimes />
          </button>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3 px-5 py-4">

          <img
            src="/profile.png"
            className="w-11 h-11 rounded-full object-top object-cover"
          />

          <div className="relative" ref={privacyRef}>
            <p className="font-semibold text-sm">Syed Umair</p>

            <button
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="mt-1 flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200"
            >
              {current?.icon}
              {current?.label}
              <FaCaretDown className={`transition ${showPrivacy ? "rotate-180" : ""}`} />
            </button>

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
            className="text-gray-600 hover:text-gray-800 transition"
          >
            <FaSmile className="text-xl" />
          </button>

          {showEmoji && (
            <div className="absolute bottom-full mb-2 left-0 z-50 scale-90 origin-bottom-left shadow-lg rounded-xl overflow-hidden">
              <EmojiPicker
onEmojiClick={(emojiData: any) =>
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

        {/* ACTION BAR (FIXED TOOLTIP STYLE) */}
      <div className="flex items-center justify-between px-5 py-4 border-t text-gray-600">

  {/* LEFT HEADING */}
  <div className="text-sm font-semibold text-gray-500">
    Add to your post
  </div>

  {/* RIGHT ICONS */}
  <div className="flex items-center gap-3 text-lg">

    {/* PHOTO */}
    <label className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 cursor-pointer group relative">
      <FaImage />
      <input
        type="file"
        hidden
        accept="image/*"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) setMedia(file);
}}
      />

      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition">
        Photo
      </span>
    </label>

    {/* VIDEO */}
    <label className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 cursor-pointer group relative">
      <FaVideo />
      <input
        type="file"
        hidden
        accept="video/*"
        onChange={(e) => setMedia(e.target.files[0])}
      />

      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition">
        Video
      </span>
    </label>

    {/* FEELING */}
    <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 cursor-pointer group relative">
      <FaSmileWink />

      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition">
        Feeling
      </span>
    </div>

    {/* CHECK IN */}
    <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 cursor-pointer group relative">
      <FaMapMarkerAlt />

      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition">
       Location
      </span>
    </div>

    {/* TAG */}
    <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 cursor-pointer group relative">
      <FaTag />

      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition">
        Tag
      </span>
    </div>

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
    </div>
  );
}