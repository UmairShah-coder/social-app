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
    <section className="w-full bg-black text-white py-24 relative overflow-hidden">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full  pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-red-600">
          How It Works
        </h2>
        <p className="text-zinc-400 text-sm mt-3">
          Simple steps to unlock unlimited entertainment
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* LINE (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <div className="grid md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 text-center
                hover:-translate-y-2 hover:shadow-red-600/30 transition-all duration-300 shadow-lg"
              >

                {/* STEP NUMBER */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs bg-red-600 px-3 py-1 rounded-full">
                  {`0${index + 1}`}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                bg-gradient-to-br from-red-600/30 to-red-600/10 mb-6">
                  <Icon size={30} className="text-red-500" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;