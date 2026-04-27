import {
  Clapperboard,
  Film,
  Flame,
  Laugh,
  Ghost,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Hollywood",
    desc: "Top English blockbuster movies",
    icon: Clapperboard,
  },
  {
    id: 2,
    title: "Bollywood",
    desc: "Latest Hindi cinema hits",
    icon: Film,
  },
  {
    id: 3,
    title: "Trending",
    desc: "Most popular right now",
    icon: Flame,
  },
  {
    id: 4,
    title: "Comedy",
    desc: "Laugh out loud content",
    icon: Laugh,
  },
  {
    id: 5,
    title: "Horror",
    desc: "Scary & thrilling movies",
    icon: Ghost,
  },
];

const AutoSlider = () => {
  return (
    <section className="w-full bg-black text-white py-16 overflow-hidden">

      {/* FONT */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="text-3xl font-bold text-red-600">
          Explore Categories
        </h2>
        <p className="text-zinc-400 text-sm mt-1">
          Discover movies by genre, mood and popularity
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative overflow-hidden group">

        <div className="flex gap-6 w-max animate-scroll group-hover:[animation-play-state:paused]">

          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="min-w-[260px] h-[180px] rounded-2xl p-5
                bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
                border border-zinc-700
                backdrop-blur-lg
                shadow-lg
                hover:shadow-red-600/30
                hover:-translate-x-2
                transition-all duration-300
                flex flex-col justify-between"
              >
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <Icon size={32} className="text-red-600" />
                  <span className="text-xs text-zinc-500">
                    Category
                  </span>
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
};

export default AutoSlider;