const Hero = () => {
  return (
    <section className="w-full bg-black mt-[0.4px] text-white">
 <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">

        {/* 🔥 LEFT: TEXT */}
        <div className="md:w-1/2 space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Movies That
            <span className="text-red-600"> Inspire You</span>
          </h1>

          <p className="text-zinc-400 text-lg">
            Explore trending movies, ratings, trailers, and cast details all in one place. Hollywood, Bollywood, Punjabi movies and more.
          
          </p>

          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-medium shadow-lg shadow-red-600/30">
            Explore Now
          </button>

        </div>

        {/* 🎬 RIGHT: IMAGE */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">

<video
  autoPlay
  loop
  muted
  playsInline
  className="h-[440px] w-full object-cover rounded-xl"
>
  <source
    src="/vio.mp4"
    type="video/mp4"
  />
</video>

        </div>

      </div>

    </section>
  );
};

export default Hero;