import { Search, Clapperboard, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover Movies",
    desc: "Browse thousands of movies across all genres instantly",
  },
  {
    icon: Clapperboard,
    title: "Choose Your Favorite",
    desc: "Pick from trending, popular or recommended content",
  },
  {
    icon: PlayCircle,
    title: "Start Watching",
    desc: "Enjoy seamless streaming anytime anywhere",
  },
];

const ExperienceSection = () => {
  return (
    <section className="w-full bg-black text-white py-20">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-red-600">
          How It Works
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Simple steps to enjoy unlimited entertainment
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center
              hover:scale-105 hover:border-red-600/40 transition duration-300 shadow-lg"
            >

              {/* ICON */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-red-600/20 mb-5">
                <Icon size={28} className="text-red-600" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default ExperienceSection;